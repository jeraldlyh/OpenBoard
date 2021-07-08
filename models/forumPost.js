import mongoose from "mongoose"

const Schema = mongoose.Schema

const forumPostSchema = new Schema({
    user: mongoose.Schema.Types.ObjectId,
    postDateTime: Date,
    description: String,
    likes: String,
    comments: [{
        user: mongoose.Schema.Types.ObjectId,
        comment: String,
        commentDateTime: Date
    }]
})

mongoose.models = {}
const ForumPost = mongoose.model("ForumPost", forumPostSchema)

export default ForumPost