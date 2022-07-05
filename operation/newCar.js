export async function addCar(req, res, database) {
  const car = await database.collection("Honda_Cars").insertOne(req.body);
  console.log(car.acknowledged);
  res.status(204);
  res.send(car);
}
