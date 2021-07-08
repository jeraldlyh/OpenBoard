import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    root_id: String,
    registeredDateTime: Date,
    username: String,
    password: String,
    bio: String,
    name: String,
    dateOfBirth: Date,
    email: String,
    address: String,
    mobileNumber: String,
    socials: {
        website: String,
        github: String,
        twitter: String,
        instagram: String,
        facebook: String
    }
})

mongoose.models = {}
const User = mongoose.model("User", userSchema)

export default User