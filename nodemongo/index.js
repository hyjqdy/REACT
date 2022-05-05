const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'secret123';

const users = [
   {
    username: 'Smith',
    password: 'test123',
    role: "admin"
   },
   {
    username: 'Lia',
    password: 'test123',
    role: "member"
   }
];

// middelware 
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if(err) {
                res.sendStatus(403);         
            } else {
                req.user = user;
                next();
            }
        })
    } else {
        res.sendStatus(401); 
    }
}

var routes = require('./routes/index');
var products = require('./routes/products');

mongoose.connect("mongodb://localhost:27017/sales_db")
.then(() => {
    const app = express();
    // set ejs as template engine
    app.set("view engine", "ejs");
    app.use(express.json()); // ==> HttpMessageHandler // JSON <--> String

    app.post('/login', (req,res) => {
        let {username, password} = req.body;
        const user = users.find(u =>  u.username == username && u.password == password);
        if(user) {
            const accessToken = jwt.sign({name:user.username, role: user.role}, accessTokenSecret, {expiresIn: '1m'});
            res.json(accessToken);
        } {
            res.send("username or password not valid!!!");
        }
    });

    app.use("/api", routes);
    app.use("/api/products", authenticateJWT, products);

    app.get("/productview", async (req,res) => {
        let products = [
            {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
            {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
            {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
            {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
            {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];
          res.render('productPage', {products: products});  
    });
    app.listen(5000, () => {
        console.log("server started!!!")
    })
})


