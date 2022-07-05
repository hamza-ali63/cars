import { ObjectId } from "mongodb";

export async function removeOne(req, res, database) {
  const query = { _id: new ObjectId(req.params._id) };
  const remove = await database.collection("Honda_Cars").deleteOne(query);
  if (remove.deletedCount >= 1) {
    res.status(204);
    res.send("done");
    console.log("don");
  } else {
    res.status(404);
    res.send("not exist");
    console.log("not exist");
  }
}
