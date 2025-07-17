from sqlalchemy.orm import Session
from . import models, auth
from sqlalchemy.exc import IntegrityError

def create_user(db: Session, user: models.UserCreate):
    hashed_password = auth.get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
    except IntegrityError:
        db.rollback()
        return None
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def increment_usage(db: Session, user_id: int, service_name: str, limit: int = 1):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        return None
    if service_name == "calling_agent":
        if user.calling_agent_count >= limit:
            return False
        user.calling_agent_count += 1
    elif service_name == "chatbot":
        if user.chatbot_count >= limit:
            return False
        user.chatbot_count += 1
    elif service_name == "image_generation":
        if user.image_generation_count >= limit:
            return False
        user.image_generation_count += 1
    else:
        return None
    db.commit()
    db.refresh(user)
    return user