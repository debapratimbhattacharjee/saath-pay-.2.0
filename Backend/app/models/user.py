from app.db.session import base
from sqlalchemy import Column, Integer, String

class signup(base):
    __tablename__ = "signup"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)