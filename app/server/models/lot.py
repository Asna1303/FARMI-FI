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
                "name": "lotA",
                "blocks": "146",
                "status": "running",
                "active": True,
                "createdat": "2022-02-01T12:34:56.789000",
                "updatedat" : "2022-02-01T12:34:56.789000",
                "createdby" : "users",
                "updatedby" : "users",
            }
        }




