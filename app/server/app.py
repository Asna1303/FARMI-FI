from fastapi import FastAPI

from server.routes.lot import router as LotRouter

app = FastAPI()

app.include_router(LotRouter, tags=["Lot"], prefix="/lot")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}