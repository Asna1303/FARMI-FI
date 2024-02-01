import datetime
from typing import Optional
from datetime import datetime

from pydantic import BaseModel, Field

class DataSchema(BaseModel):
    date: Optional[datetime]
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
