import mongoose from "mongoose"

const Schema = mongoose.Schema

const forumPostSchema = new Schema({
    root_id: String,
    user_id: mongoose.Schema.Types.ObjectId,
    postDateTime: Date,
    description: String,
    likes: String,
    comments: [{
        user_id: mongoose.Schema.Types.ObjectId,
        comment: String,
        commentDateTime: Date
    }]
})

mongoose.models = {}
const ForumPost = mongoose.model("ForumPost", forumPostSchema)

export default ForumPost