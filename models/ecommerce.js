import mongoose from "mongoose"

const Schema = mongoose.Schema

const ecommerceSchema = new Schema({
    category: {
        name: String,
        products: [{
            name: String,
            price: Number,
            quantity: Number,
            imageURL: String,
            // buyers: [{
            //     username: String,
            //     purchaseDate: Date,
            //     quantity: Number,
            //     region: {
            //         longitude: Number,
            //         latitude: Number
            //     },
            //     device: String
            // }]
        }]
    }
})

mongoose.models = {}
const ecommerce = mongoose.model("Ecommerce", ecommerceSchema)

export default ecommerce