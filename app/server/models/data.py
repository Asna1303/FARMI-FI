import datetime
from typing import Optional
from datetime import datetime

from pydantic import BaseModel, Field

class DataSchema(BaseModel):
    date: datetime
    workdone: str
    yieldobtained: int
    lotid: str
    
    class Config:
        schema_extra = {
            "example": {
                "date": "2022-02-01T12:34:56.789000",
                "workdone": "planted",
                "yieldobtained": "100",
                "lotid": 4
               
            }
        }
class UpdateDataSchema(BaseModel):
    date: Optional[datetime]
    workdone: Optional[str]
    yieldobtained: Optional[int]
    lotid: Optional[str]
    
   

    class Config:
        schema_extra = {
             "example": {
                "date": "2022-02-01T12:34:56.789000",
                "workdone": "planted",
                "yieldobtained": "100",
                "lotid": 4
               
           
                
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

