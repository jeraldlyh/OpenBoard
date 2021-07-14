import mongoose from "mongoose"

const Schema = mongoose.Schema

const rootSchema = new Schema({
    name: String,
    firebaseId: String,
    preferences: [{
        name: String
    }]
})

mongoose.models = {}
const Root = mongoose.model("Root", rootSchema)

export default Root