import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../middleware/mongodb"
import Review from "../../../models/review"
import faker from "faker"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const review = new Review({
        root_id: "60e6b39f51e0963eb878271b",
        user_id: "60e6b9b845132f42571f3ac2",
        reviewDateTime: faker.time.recent(),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number()
    })
    const response = await review.save()
    return res.status(201).send(response)
}

export default connectDB(handler)