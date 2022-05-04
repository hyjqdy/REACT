const mongoose = require('mongoose');
const {Schema, connection} = mongoose;

// Schema to map to mongodb collection
var SalesSchema = new Schema({
    category: String,
    product: String,
    sales: Number,
    quarter: Number
});

const Sales = mongoose.model('Sale', SalesSchema); // maps to "sales" collection

// use Model to perform CRUD operations

mongoose.connect("mongodb://localhost:27017/sales_db");

connection.once('connected', async () => {
    try {
        let docs = await Sales.find();
        docs.forEach(doc => {
            console.log(doc.category, doc.product);
        })
    } finally {
        await connection.close();
    }
});