import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../middleware/mongodb"
import Review from "../../../models/review"
import reviewData from "../../../data/reviews.json"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const updatedData = _.map(reviewData, function (data) {
        return _.extend(data, {
            root_id: process.env.ROOT_ID,
            reviewDateTime: new Date().getTime(),
        })
    })
    const response = await Review.insertMany(updatedData)
    return res.status(201).send(response)
}

export default connectDB(handler)