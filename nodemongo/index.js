const express = require('express');
const mongoose = require('mongoose');

var routes = require('./routes/index');
var products = require('./routes/products');

mongoose.connect("mongodb://localhost:27017/sales_db")
.then(() => {
    const app = express();
    app.use(express.json()); // ==> HttpMessageHandler // JSON <--> String
    app.use("/api", routes);
    app.use("/api/products", products);
    app.listen(5000, () => {
        console.log("server started!!!")
    })
})


