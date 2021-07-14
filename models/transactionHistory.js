import mongoose from "mongoose"

const Schema = mongoose.Schema

const transactionHistorySchema = new Schema({
    user: String,
    purchaseDateTime: Date,
    quantity: Number,
    product: String,
    price: Number,
    region: {
        longitude: Number,
        latitude: Number
    },
    device: String
})

mongoose.models = {}
const transactionHistory = mongoose.model("TransactionHistory", transactionHistorySchema)

export default transactionHistory
