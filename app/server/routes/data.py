from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database.data import (
    add_data,
    delete_data,
    retrieve_all_data,
    retrieve_data_by_id,
    update_data,
)
from server.models.data import (
    ErrorResponseModel,
    ResponseModel,
    DataSchema,
    UpdateDataSchema,
)

router = APIRouter()

@router.post("/", response_description="Data added into the database")
async def add_data_entry(data: DataSchema = Body(...)):
    data = jsonable_encoder(data)
    new_data = await add_data(data)
    return ResponseModel(new_data, "Data added successfully.")

@router.get("/", response_description="All data retrieved")
async def get_all_data():
    all_data = await retrieve_all_data()
    if all_data:
        return ResponseModel(all_data, "All data retrieved successfully")
    return ResponseModel(all_data, "Empty list returned")

@router.get("/{id}", response_description="Data retrieved")
async def get_data_entry(id):
    data = await retrieve_data_by_id(id)
    if data:
        return ResponseModel(data, "Data retrieved successfully")
    return ErrorResponseModel("An error occurred.", 404, "Data doesn't exist.")

@router.put("/{id}")
async def update_data_entry(id: str, req: UpdateDataSchema = Body(...)):
    req = {k: v for k, v in req.dict().items() if v is not None}
    updated_data = await update_data(id, req)
    if updated_data:
        return ResponseModel(
            "Data with ID: {} update is successful".format(id),
            "Data updated successfully",
        )
    return ErrorResponseModel(
        "An error occurred",
        404,
        "There was an error updating the data.",
    )

@router.delete("/{id}", response_description="Data deleted from the database")
async def delete_data_entry(id: str):
    deleted_data = await delete_data(id)
    if deleted_data:
        return ResponseModel(
            "Data with ID: {} removed".format(id), "Data deleted successfully"
        )
    return ErrorResponseModel(
        "An error occurred", 404, "Data with id {0} doesn't exist".format(id)
    )



