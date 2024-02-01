from motor.motor_asyncio import AsyncIOMotorClient
from bson.objectid import ObjectId

MONGO_DETAILS = "mongodb://localhost:27017"

data_client = AsyncIOMotorClient(MONGO_DETAILS)

data_database = data_client.data  # Change 'data' to your desired database name

data_collection = data_database.get_collection("data_collection")


# helpers
def data_helper(data) -> dict:
    return {
        "id": str(data["_id"]),
        "date": data["date"],
        "workdone": data["workdone"],
        "yieldobtained": data["yieldobtained"],
        "lotid": data["lotid"],
    }


# Retrieve all data present in the database
async def retrieve_all_data():
    all_data = []
    async for data in data_collection.find():
        all_data.append(data_helper(data))
    return all_data


# Add new data into the database
async def add_data(data: dict) -> dict:
    result = await data_collection.insert_one(data)
    new_data = await data_collection.find_one({"_id": result.inserted_id})
    return data_helper(new_data)


# Retrieve data with a matching ID
async def retrieve_data_by_id(id: str) -> dict:
    data = await data_collection.find_one({"_id": ObjectId(id)})
    if data:
        return data_helper(data)


# Update data with a matching ID
async def update_data(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    existing_data = await data_collection.find_one({"_id": ObjectId(id)})
    if existing_data:
        updated_data = await data_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_data:
            return True
        return False


# Delete data from the database
async def delete_data(id: str):
    existing_data = await data_collection.find_one({"_id": ObjectId(id)})
    if existing_data:
        await data_collection.delete_one({"_id": ObjectId(id)})
        return True
