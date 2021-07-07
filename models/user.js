import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    // password: String,
    // email: String,
    // description: String,
    // bio: String,
    // registeredAt: Date
})

mongoose.models = {}

export default mongoose.model("User", userSchema)