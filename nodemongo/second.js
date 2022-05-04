const mongoose = require('mongoose');
const {Schema, connection} = mongoose;

// Schema to map to mongodb collection
var UserSchema = new Schema({
    email: String
});

const User = mongoose.model('User', UserSchema); // maps to "users" collection

// use Model to perform CRUD operations

mongoose.connect("mongodb://localhost:27017/sales_db");

connection.once('connected', async () => {
    try {
       await User.create([
           {"email": "banu@gmail.com"},
           {"email": "smith@gmail.com"},
           {"email": "diana@gmail.com"}
       ]);
    } finally {
        await connection.close();
    }
});