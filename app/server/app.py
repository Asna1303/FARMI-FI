from fastapi import FastAPI

from server.routes.lot import router as LotRouter
from server.routes.data import router as DataRouter

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(LotRouter, tags=["Lot"], prefix="/lot")
app.include_router(DataRouter, tags=["Data"], prefix="/data")

origins = [
"http://localhost:3000",
"http://localhost:8000",
]
app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],  
allow_headers=["*"],  
)

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}