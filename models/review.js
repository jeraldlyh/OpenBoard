import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    user: mongoose.Schema.Types.ObjectId,
    reviewDateTime: Date,
    comment: String,
    rating: Number
})

mongoose.models = {}
const Review = mongoose.model("Review", reviewSchema)

export default Review