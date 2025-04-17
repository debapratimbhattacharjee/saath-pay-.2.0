from fastapi import HTTPException
from app.schemas.user import UserSignup, UserLogin
from app.utils.security import hash_password, verify_password
from app.models.User import User 


# Temporary in-memory DB
from app.db.session import SessionLocal

class LoginService:
 
    def login(self, user: UserLogin):
        db = SessionLocal()
        db_user = db.query(User).filter_by(email=user.email).first()
        db.close()
        if not db_user:
            raise HTTPException(status_code=404, detail="User not found")
        
        if not verify_password(user.password, db_user.password):
            raise HTTPException(status_code=401, detail="Incorrect password")

        return {"message": "Login successful"}