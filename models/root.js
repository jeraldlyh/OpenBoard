import mongoose from "mongoose"

const Schema = mongoose.Schema

const rootSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username required"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    preferences: [{
        name: String
    }]
})

mongoose.models = {}
const Root = mongoose.model("Root", rootSchema)

export default Root