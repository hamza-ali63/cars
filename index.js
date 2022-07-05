import express from "express";
import { connect } from "./connection/connect.js";
import { getAllCars } from "./operation/getCars.js";
import { getCarsByModel } from "./operation/getOneCar.js";
import { addCar } from "./operation/newCar.js";
import { removeOne } from "./operation/removeById.js";
import { getOne } from "./operation/getCarById.js";

const app = express();
app.use(express.json());
const database = await connect();

app.get("/api/v1/cars", (req, res) => getAllCars(req, res, database));

app.get("/api/v1/cars/:cars_model", (req, res) =>
  getCarsByModel(req, res, database)
);

app.post("/api/v1/cars", (req, res) => addCar(req, res, database));

app.delete("/api/v1/cars/:_id", (req, res) => removeOne(req, res, database));
app.get("/api/v1/car/:_id", (req, res) => getOne(req, res, database));

app.listen(3007);
