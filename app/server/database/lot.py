import motor.motor_asyncio

MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.farm

lot_collection = database.get_collection("lots_collection")


# helpers


def lot_helper(lot) -> dict:
    return {
        "id": str(lot["_id"]),
        "name": lot["name"],
        "blocks": lot["blocks"],
        "status": lot["status"],
        "active": lot["active"],
        "createdat": lot["createdat"],
        "createdby": lot["createdby"],
        "updatedat": lot["updatedat"],
        "updatedby": lot["updatedby"],
    }
from bson.objectid import ObjectId



# Retrieve all lots present in the database
async def retrieve_lots():
    lots = []
    async for lot in lot_collection.find():
        lots.append(lot_helper(lot))
    return lots


# Add a new lot into to the database
async def add_lot(lot_data: dict) -> dict:
    lot = await lot_collection.insert_one(lot_data)
    new_lot = await lot_collection.find_one({"_id": lot.inserted_id})
    return lot_helper(new_lot)


# Retrieve a lot with a matching ID
async def retrieve_lot(id: str) -> dict:
    lot = await lot_collection.find_one({"_id": ObjectId(id)})
    if lot:
        return lot_helper(lot)


# Update a lot with a matching ID
async def update_lot(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    lot = await lot_collection.find_one({"_id": ObjectId(id)})
    if lot:
        updated_lot = await lot_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_lot:
            return True
        return False


# Delete a lot from the database
async def delete_lot(id: str):
    lot = await lot_collection.find_one({"_id": ObjectId(id)})
    if lot:
        await lot_collection.delete_one({"_id": ObjectId(id)})
        return True
