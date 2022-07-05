import { ObjectId } from "mongodb";

export async function getOne(req, res, database) {
  const query = { _id: new ObjectId(req.params._id) };
  const car = await database.collection("Honda_Cars").findOne(query);
  res.send(car);
}
