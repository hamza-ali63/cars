export async function getAllCars(req, res, database) {
  const result = await database.collection("Honda_Cars").find({}).toArray();
  res.status(200);
  res.send(result);
  console.log(result);
}
