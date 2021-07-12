import mongoose from "mongoose"

const Schema = mongoose.Schema

const rootSchema = new Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    preferences: [{
        name: String
    }]
})

mongoose.models = {}
const Root = mongoose.model("Root", rootSchema)

export default Root