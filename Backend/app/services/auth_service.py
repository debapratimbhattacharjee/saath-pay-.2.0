from fastapi import HTTPException
from app.schemas.user import UserSignup, UserLogin
from app.utils.security import hash_password, verify_password
from app.models import User 


# Temporary in-memory DB
from app.db.session import SessionLocal

class AuthService:
    def signup(self, user: UserSignup):
        db = SessionLocal()
        existing_user = db.query(User.User).filter_by(username=user.username).first()
        if existing_user:
            raise HTTPException(status_code=400, detail="User already exists")
        
        db_user = User.User(
            username=user.username,
            email=user.email,
            password=hash_password(user.password)
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        db.close()
        return {"message": "User registered"}

 
    def login(self, user: UserLogin):
        db = SessionLocal()
        db_user = db.query(User).filter_by(email=user.email).first()
        db.close()
        if not db_user:
            raise HTTPException(status_code=404, detail="User not found")
        
        if not verify_password(user.password, db_user.password):
            raise HTTPException(status_code=401, detail="Incorrect password")

        return {"message": "Login successful"}