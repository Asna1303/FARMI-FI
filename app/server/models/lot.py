import datetime
from typing import Optional
from datetime import datetime

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
                "name": "lotA",
                "blocks": "146",
                "status": "running",
                "active": True,
                "createdat": "2022-02-01T12:34:56.789000",
                "updatedat" : "2022-02-01T12:34:56.789000",
                "createdby" : "users",
                "updatedby" : "users"
            }
        }
class UpdateLotSchema(BaseModel):
    name: Optional[str]
    blocks: Optional[int]
    status: Optional[str]
    active: Optional[bool]
    createdat: Optional[datetime]
    updatedat:Optional[datetime]
    createdby :Optional[str]
    updatedby:Optional[str]


    class Config:
        schema_extra = {
            "example": {
                "name": "lotA",
                "blocks": 340,
                "status": "running",
                "active": True,
                 "createdat": "2022-02-01T12:34:56.789000",
                "updatedat" : "2022-02-01T12:34:56.789000",
                "createdby" : "users",
                "updatedby" : "users"
                
                
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



