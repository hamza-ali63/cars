import { MongoClient } from "mongodb";

export async function connect() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
  return client.db("Cars");
}
