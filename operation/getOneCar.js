// import { MongoClient } from "mongodb";

// export async function connect() {
//   const uri = "mongodb://127.0.0.1:27017";
//   const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
//   return client.db("Cars");
// }

// function getAllCars(database) {
//   const array = "";
//   for (let i = 0; i < database.length; i++) {
//     array.push(database.collection("Honda_Cars").find({}).toArray());
//   }
//   return array;
// }
// const x = await connect();
// const zzz = getAllCars(x);
// console.log(zzz);

// function getX(x) {
//   return x;
// }
// const database = await connect();                            model: req.params.cars_model
// const result = getX(database);
// console.log(result);

export async function getCarsByModel(req, res, database) {
  const civic = await database.collection("Honda_Cars");
  const result = await civic.find({ model: req.params.cars_model }).toArray();
  if (result.length !== 0) {
    res.status(200);
    res.send(result);
    console.log(result);
  } else {
    res.status(404);
    res.send("not found");
    console.log("not found");
  }
}
