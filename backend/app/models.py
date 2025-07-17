from typing import TYPE_CHECKING
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from .database import Base
from pydantic import BaseModel, EmailStr

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    email: Mapped[str] = mapped_column(String, unique=True, index=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String, nullable=False)
    calling_agent_count: Mapped[int] = mapped_column(Integer, default=0)
    chatbot_count: Mapped[int] = mapped_column(Integer, default=0)
    image_generation_count: Mapped[int] = mapped_column(Integer, default=0)

# Pydantic schemas
class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserLogin(UserBase):
    password: str

class UserOut(UserBase):
    id: int
    calling_agent_count: int
    chatbot_count: int
    image_generation_count: int
    class Config:
        from_attributes = True  # Updated for Pydantic v2