import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express()
const port = 5000;

app.use(express.json())
dotenv.config()

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

mongoose.set("strictQuery", false)
mongoose.connect(process.env.mongoDb).then(console.log("connected to mongoDB"))