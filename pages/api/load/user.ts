import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../middleware/mongodb"
import User from "../../../models/user"
import userData from "../../../data/users.json"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const updatedData = _.map(userData, function (data) {
        return _.extend(data, {
            root_id: process.env.ROOT_ID,
            registeredDateTime: new Date().getTime(),
            dateOfBirth: new Date().setMonth(1, 1)
        })
    })
    const response = await User.insertMany(updatedData)
    return res.status(201).send(response)
}

export default connectDB(handler);