from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from . import models, database, crud, auth
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import IntegrityError
from typing import Dict

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# Allow CORS for frontend dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Faqtor backend is running!"}

@app.post("/auth/signup", response_model=models.UserOut)
def signup(user: models.UserCreate, db: Session = Depends(auth.get_db)):
    db_user = crud.create_user(db, user)
    if not db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return db_user

@app.post("/auth/token")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(auth.get_db)):
    user = crud.get_user_by_email(db, form_data.username)
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token = auth.create_access_token(data={"sub": user.email, "user_id": user.id})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/auth/me", response_model=models.UserOut)
def get_me(current_user: models.User = Depends(auth.get_current_user)):
    return current_user

@app.post("/demo/{service_name}")
def book_demo(service_name: str, db: Session = Depends(auth.get_db), current_user: models.User = Depends(auth.get_current_user)):
    # Set per-service limits here
    service_limits = {
        "calling_agent": 3,
        "chatbot": 3,
        "image_generation": 5
    }
    if service_name not in service_limits:
        raise HTTPException(status_code=400, detail="Invalid service name")
    user = crud.increment_usage(db, current_user.id, service_name, limit=service_limits[service_name])
    if user is False:
        raise HTTPException(status_code=403, detail="Usage limit reached for this service")
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": f"Demo booked for {service_name}", "user": user.email}