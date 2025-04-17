from fastapi import FastAPI
from app.api import auth
from fastapi.middleware.cors import CORSMiddleware
from app.db.session import base, engine
from app.models.User import User

app = FastAPI()

base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def home():
    return {"message": "API is live"}