from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database.lot import (
    add_lot,
    delete_lot,
    retrieve_lots,
    retrieve_lot,
    update_lot,
)
from server.models.lot import (
    ErrorResponseModel,
    ResponseModel,
    LotSchema,
    # UpdateDataSchema,
    UpdateLotSchema,
)

router = APIRouter()

@router.post("/", response_description="Lot data added into the database")
async def add_lot_data(lot: LotSchema = Body(...)):
    lot = jsonable_encoder(lot)
    new_lot = await add_lot(lot)
    return ResponseModel(new_lot, "lot added successfully.")

@router.get("/", response_description="Lots retrieved")
async def get_lots():
    lots = await retrieve_lots()
    if lots:
        return ResponseModel(lots, "Lots data retrieved successfully")
    return ResponseModel(lots, "Empty list returned")


@router.get("/{id}", response_description="lot data retrieved")
async def get_lot_data(id):
    lot = await retrieve_lot(id)
    if lot:
        return ResponseModel(lot, "lot data retrieved successfully")
    return ErrorResponseModel("An error occurred.", 404, "lot doesn't exist.")

@router.put("/{id}")
async def update_lot_data(id: str, req: UpdateLotSchema = Body(...)):
    req = {k: v for k, v in req.dict().items() if v is not None}
    updated_lot = await update_lot(id, req)
    if updated_lot:
        return ResponseModel(
            "Lot with ID: {} name update is successful".format(id),
            "Lot name updated successfully",
        )
    return ErrorResponseModel(
        "An error occurred",
        404,
        "There was an error updating the student data.",
    )
@router.delete("/{id}", response_description="Lot data deleted from the database")
async def delete_lot_data(id: str):
    deleted_lot = await delete_lot(id)
    if deleted_lot:
        return ResponseModel(
            "lot with ID: {} removed".format(id), "lot deleted successfully"
        )
    return ErrorResponseModel(
        "An error occurred", 404, "lot with id {0} doesn't exist".format(id)
    )


