import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../../middleware/mongodb"
import User from "../../../../models/user"
import faker from "faker"
import moment from "moment"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body: { id }, method } = req

    if (method === "POST") {
        const randomDay = Math.floor(Math.random() * 21) + 1

        const response = await User.create({
            root_id: id,
            registeredDateTime: moment(faker.time.recent()).subtract(randomDay, "days"),
            username: faker.internet.userName(),
            password: faker.internet.password(),
            bio: faker.lorem.sentence(),
            fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            mobileNumber: "91234567",
            socials: {
                website: "",
                github: "",
                twitter: "",
                instagram: "",
                facebook: ""
            }
        })
        return res.status(201).send(response)
    }
    return res.status(404).end()
}

export default connectDB(handler)