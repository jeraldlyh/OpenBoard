import mongoose from "mongoose"

const Schema = mongoose.Schema

const productSchema = new Schema({
    category: String,
    root_id: mongoose.Schema.Types.ObjectId,
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
})

mongoose.models = {}
const Product = mongoose.model("Product", productSchema)

export default Product