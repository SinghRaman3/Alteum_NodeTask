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

const mongoURl = process.env.mongoDb //Sign in to mongodb to get your url

mongoose.set("strictQuery", false)
mongoose.connect(mongoURl).then(console.log("connected to mongoDB"))