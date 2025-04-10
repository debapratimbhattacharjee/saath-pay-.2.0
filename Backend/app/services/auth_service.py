from fastapi import HTTPException
from app.schemas.user import UserSignup, UserLogin
from app.utils.security import hash_password, verify_password
from app.models import user as user_model

# Temporary in-memory DB
fake_users = {}

class AuthService:
    def signup(self, user: UserSignup):
        if user.username in fake_users:
            raise HTTPException(status_code=400, detail="User already exists")
        fake_users[user.username] = hash_password(user.password)
        return {"message": "User registered"}

    def login(self, user: UserLogin):
        stored_password = fake_users.get(user.username)
        if not stored_password or not verify_password(user.password, stored_password):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        return {"message": "Login successful"}
