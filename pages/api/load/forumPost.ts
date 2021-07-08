import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../middleware/mongodb"
import ForumPost from "../../../models/forumPost"
import forumPostData from "../../../data/forumPost.json"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const updatedData = _.map(forumPostData, function (data) {
        var tempData = _.extend(data, {
            root_id: process.env.ROOT_ID,
            postDateTime: new Date().getTime(),
        })
        return _.merge(tempData, {
                comments: [{
                    commentDateTime: new Date().getTime()
                }]
            })
    })
    const response = await ForumPost.insertMany(updatedData)
    return res.status(201).send(response)
}

export default connectDB(handler);