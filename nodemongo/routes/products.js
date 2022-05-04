var express = require('express');
var router = express.Router();

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

// http://localhost:8080/products
router.get('/', function(req, res, next) {
   Sales.find({}, function(err, docs) {
        res.json(docs);
   });
});

// http://localhost:8080/products/Seafood
router.get('/:category', function(req, res, next) {
    Sales.find({category:req.params.category}, function(err, docs) {
         res.json(docs);
    });
 });

 router.post('/', function(req, res, next) {
    Sales.create(req.body, function(err, docs) {
         res.send("Product added!!!")
    });
 });

 module.exports = router;