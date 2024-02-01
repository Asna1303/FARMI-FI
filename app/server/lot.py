import datetime
from typing import Optional
from click import DateTime

from pydantic import BaseModel, EmailStr, Field


class LotSchema(BaseModel):
    name: str 
    blocks: int = Field(...,gt=100)
    status: str 
    active: bool
    createdat: datetime
    updatedat: datetime
    createdby : str
    updatedby : str
    

    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "blocks": "146",
                "status": "running",
                "active": True,
                "createdat": "2022-02-01T12:34:56.789000",
                "updatedat" : "2022-02-01T12:34:56.789000",
                "createdby" : "users",
                "updatedby" : "users",
            }
        }


class Data(BaseModel):
    date: Optional[DateTime]
    workdone: Optional[str]
    yieldobtained: Optional[int]
    lotid: Optional[int]
    
    class Config:
        schema_extra = {
            "example": {
                "date": "2022-02-01T12:34:56.789000",
                "workdone": "planted",
                "yieldobtained": "100",
                "lotid": 4,
               
            }
        }


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}