from fastapi import APIRouter, Depends, HTTPException
from app.schemas.user import UserCreate, UserLogin
from app.services.auth_service import AuthService

router = APIRouter()
auth_service = AuthService()

@router.post("/signup")
def signup(user: UserCreate):
    return auth_service.signup(user)

@router.post("/login")
def login(user: UserLogin):
    return auth_service.login(user)
