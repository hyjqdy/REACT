# React.js

Banuprakash C

Full Stack Architect, 
Corporate Trainer,
CO-FOUNDER: Lucida Technologies Pvt Ltd.,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/


Github: https://github.com/BanuPrakash/REACT

====

Softwares Required:
1) Chrome Web browser with following extensions:
	1.1) add React Developer tools
	1.2) add Redux DevTools
2) Visual Studio Code
3) NodeJS Latest LTS

-----------------------------------

JavaScript
	==> Scripting Language, Loosely typed, dynamically typed language

	var data = "Harry"; // String type

	data.toUpperCase();

	data = 32; // Numeric type

	data++;

	data = true;

--------------

file.js

JavaScript engine is required to exceute js

* V8 ==> google; chrome browser, nodeJs
* Spidermonkey ==> Firefox
* Nashhorn ==> Oracle
* Chakra
* ionMonkey


file.js

var g = 100;
console.log("Hello!!!");
function doTask() {
	var a = 10;
	console.log("i am dotask");
	if(g > 1) {
		var b = 20;
		c = 30;
	}
	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);

--

global object ==> Global [Acrobat tools] , global [ NodeJS] or Window [Browser]

===

JS is event driven

============================

console.log("Hello!!!");

setTimeout(function timed() {
	console.log("time!!");
}, 100);

$("#btn").click(function clicked() {
	console.log("clicked!!!");
});

console.log("Bye!!!");

===

Thread 1

while(true) {
	sleep(100);
	timed();
}

============

ES 6 ==> ECMAScript 2015


Most of the engines support ES5 and not ES6

https://caniuse.com/

ES6 ==> transcompiler ==> ES5 

* Tracuer
* Babel

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

===============

ES 6 features

1) block level scope
==> let and const


const PI = 3.14159; // can't change the value of PI
var g = 100;
console.log("Hello!!!");
function doTask() {
	var a = 10;
	console.log("i am dotask");
	if(g > 1) {
		let b = 20; // block level scope
		c = 30;
	}
	console.log(g, a, b, c); // b is not visible here
}

doTask();
console.log(g, c);

-----

2) Arrow functions

function add(x,y) {
	return x + y;
}

let sub = (x,y) => x - y;
sub(4,1);

or
(x,y) => {
	return x - y;
}

3) Destructuring

var product = {"id":1, "name":"iPhone", "price":124447.44, "category" : "mobile"};

ES 5:

var n = product.name;
var p = product.price;

ES 6:

var {name, price} = product;

console.log(name); // iPhone
console.log(price); // 124447.44


var colors = ["red", "green", "blue", "orange"];

var [r, g, ...others] = colors 

// ... spread operator


console.log(r); // "red"
console.log(g); // "green"
console.log(others); // ["blue", "orange"]

4) New String literal ==> template literal

ES 5: "" or '' for string literal

ES 6: `` ticks for string literal


var name = "Smith";
var message = `Welcome to Nokia

Faculty : ${name}
`


============

5) Promise API

Sync code:

let result = doTask();
console.log("next task!!!"); // this code executes only after doTask()

Async Code:

doTask().then(
	(data) => console.log(data), // resolved
	(err) => console.log(err) // rejected
);
console.log("next task!!!"); // non blocking

========

Aggregator type of client

Promise.all()
MMT ==> API call to RedFox hotel, API call to Taj hotel
	output contains tarrif for both RedFox and Taj

Promise.race()
CDN contains employee data
Both the servers contain same data
A Server
B Server

==================

6) async and await to sole Promise API callback hells

getDepartments().then(
	(data) => getEmployees(data).then((emps) => getProject(emps))...
);


fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data));

 {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}}

===

Microtask Queue ==> Promise, async await

macrotask Queue ==> setTimeout, event based, setInterval


7) Classes and Objects
8) Module System
9) Generators

=================================================

NodeJS
==> platform with V8 JavaScript engine and libuv c++ libraries

like WebAPI of Browser libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.

Why NodeJS?
* We might use latest version of JS, TypeScript, CoffeeScript, DART to write code
Browsers won't understand them
==> convert them to code understanble by browsers: NodeJS helps this

* to build Real-time application ==> chatbot
* Streaming API ==> OTT, netflix, Prime , hotStar
* JS [ single language for frontend and backend] ==> Paypal
* RESTful API 

-----------------

* NPM ==> node Package manager
==> NodeJS provides many predefined modules like fs, http, crypto.
==> 3rd party modules [ connect to mongoDB, mySQL]
	NPM can be used to load modules for repo
	NPM can be used to publish module
	NPM can be used to run "scripts" ==> start a server, bundle, run test
---------

How does Node Projects looks like?

* npm init --y

creates "package.json"
place where we configure "dependecies", "devDependencies", "scripts" , ...

=> Dependencies ==> 3rd party modules required in development and production stage
==> DevDependiencies ==> 3rd party modules required only in development stage
	[ testing related, linting (static code analysis), "transcompile like "babel, "tsc", ..]

==> final bundle we create will contain only "dependencies" and not "devdependeices"

* install dependencies

npm install -D 	mocha chai request

"devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^9.2.2",
    "request": "^2.88.2"
  }

"chai": "4.3.6", ==> exact version
"chai": "~4.3.6" ==> major version has to be "4"; minor and patch can be latest
"chai": "^4.3.6" ==> minimu version


npm install lodash

=====================

JavaScript Unit testing Library
* mocha
* JEST
* Jasmine

Assertion Library
* chai

AAA ==> Assemble Action Assert

* request like fetch to make http requests

============

npm install ==> modules and "transitive dependencies" are downloaded into "node_modules" folder of the project

==

Push code to "repo" minus "node_modules" folder

Other team members:

npm install

this uses entries in "package.json" and downloads

===========================================

JS module systems
* IIFE
* CommonJS
* ES6 Module system
* AMD



nodeJs uses CommonJS module system

each file is a module; you deceide what to export and not.

===

var http = require('http'); // built-in module import
var fs = require('fs');
var converter = require('./converter'); // our module

var server = http.createServer((req, res) => {
   var stream = fs.createReadStream("converter.js");
   stream.on("data", (chunk) => {
       res.write(chunk);
   });
   stream.on("end", () => {
       res.end();
   })
});

server.listen(3000, () => console.log("started!!!"));

====

npm uninstall chai

npm i chai@5.0.0

=======================

https://security.snyk.io/vuln/npm


==========================================

https://clinicjs.org/doctor/
pm2

========================================

Day 2

-----

* JS engine, event loop, callback 
* ES 6 / ES2015
=> let and const
=> arrow function [ lambda expression]
=> Destructuring
=> Promise, async and await

* NodeJS
=> V8 and libuv
=> NPM, package.json
=> CommonJS module system [ require(), module.exports]
=> JS Unit Testing library [ Mocha], Chai.js asertion library


JavaScript build tools
* Automate tasks
1) We may choose to write our code in TypeScript, ES6, CoffeeScript, DART, ...

a.ts
tsc a.ts ==> a.js [ executes on JS engine ]

a.js
babel a.js [ ES6] ==> a.js [ ES5]

2) We may have to do static code analysis [ naming conventions, good practices]
==> Linting
eslint a.js

3) Unit testing

4) Minify and uglify code

5) Browserify 
	n number of js files in development

	<script src="a.js"></script>
	<script src="b.js"></script>
	<script src="c.js"></script>
	<script src="d.js"></script>

	<link rel="styleheet" href="a.css" >
	<link rel="styleheet" href="b.css" >
 
 Each <script></script> tag will lead to Network call


 bundle.js [ includes a.js, b.js, ...]
 styles.css [ includes a.css, b.css, ...]

 Build tools:
 * Grunt
 Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 

 * Gulp
 * Webpack [ defacto build tool, embedded with many framework --> React, Angular, Vue]

====================

Step 1:
webpackexample> npm init --y

Step 2: install webpack dependecies

npm i webpack webpack-cli webpack-dev-server -D

OR 

yarn add webpack webpack-cli webpack-dev-server -D

npm scripts: "test" and "start" are predefined names for scripts

npm test
npm start

any other script name we need to run it as :

npm run dev
npm run prod

---

Step 3:

index.js 

  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  npm run dev
  or
  npm run prod 

  creates "main.js" in "dist" folder


--
Webpack Configuration file:

webpack.config.js 

* configure entry and outputfile 
* plugins are configured

==> html-webpack-plugin

yarn add html-webpack-plugin
Plugin that simplifies creation of HTML files to serve your bundles

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello Webpack World!!!</h1>
</body>
</html>

* we need a plugin which automatically includes "js bundle in index.html"

npm run dev 
or 
npm run prod 

====

Step 4:
Handling CSS

yarn add css-loader style-loader -D

Step 5:

using Babel with webpack 
Babel is a transpiler / transcompiler
 
===

OOP in JS in ES5:

1

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.getAge = function() {
	return this.age;
}


let p1 = new Person("Tim", 22); // object 

let p2 = new Person("Rani",18); // object

p1.getName();

2 JSON ==> JavaScript Object Notation

let p1 = {"Name": "Tim", "age": 22};

npm run dev
asset main.js 26 KiB [emitted] (name: main)
asset index.html 283 bytes [emitted]

npm run prod
asset main.js 4.7 KiB [emitted] [minimized] (name: main)
asset index.html 252 bytes [emitted]


=============

ES6 Generator ==> along with Redux Saga

============================================

Rendering ==> convert data to presentation

Server side rendering
Presentation pages are generated on Server and sent to client
* Servlet / JSP
* ASP
* ASP.NET
* PHP
* ExpressJS with Pug/JADE/EJS/Mustache/HandleBars templates


HandleBars
Server gets this data:
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
  [
    "A",
    "Johnson",
    "Jolley",
  ]
}

use template to convert to presentation:

<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>

client [ Browser] gets:
<ul class="people_list">
    <li>Yehuda Katz</li>
    <li>Alan Johnson</li>
    <li>Charles Jolley</li>
</ul>

---

Client Side Rendering:

Server sends this data:
 
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

Client will be different technologies/frameworks ,... to convert the data to presentation
Mobile clients uses :Android/ Swift/Xamarin/ Cardova.. 

Web Clients:
* Plain old Vanilla code with XmlHttpRequest to make Ajax call get data and use DOM
to create dynamic DOM elements

var div = dom.createElement('div')
div.appendChild(..);

* jQuery

var div = $("<div/>")

* Templates
combination of HTML and Interpolation code [ place holder for dynamic content]
=> Handlebars
=> Underscore
=> Mustache
=> jquery Template

----

SPA ==> Single Page Applications
==> one HTML page [index.html] but many views
* Data binding [one-way or two-way]
* Re-rendering
* Routes
	http://server.com/products/mobiles
	http://server.com/products/mobiles/iPhone
	http://server.com/products/tv
	http://server.com/products/tv/sony
	http://server.com/products/mobiles/pixel
	http://server.com/checkout
* Secure routes	
* Bookmark
* Navigate between views

JS frameworks and libraries:
* Backbone library [ jquery or Handlebars or .. for view template]
* AngularJS Framework [ complete solution]
* React library [ view support, model ==> Redux, Context, ..]
* Angular Framework
* Vue

MVC ==> Model View Controller

Model ==> data
View ==> Presentation
controller ==> locus between Model and View

=========================================================

React.js
A JavaScript library for building user interfaces

JS Precompiler:
Babel includes JSX processing.

CDN:
https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js

https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js

============

https://github.com/chentsulin/awesome-react-renderer

============================================================

React Reconcillation
Reconciliation is the process through which React updates the Browser DOM.

const diffs = [
	{
		newNode: 1,
		oldNode: "one",
		index: 0
	},
	{
		newNode: "three",
		index: 2
	}
]

diffs.forEach(diff => {
	const newElemet = document.createElement(diff.newNode, tagName);
	if(diff.oldNode) {
		document.replaceChild(diff.newElemet, diff.index)
	} else {
		document.appendChild(diff.newElement)
	}
}
});
....


React.createElement("ul", {style:{'color': 'red'}}, React.createElement("li",null,"One"), React.createElement("li",null,"two"));


Functional Components and Class components similifies way we create react elements

Functional Components:

function Welcome() {
  return <div>
    <h1>Welcome to React</h1>
    <h3>Virtual Classroom</h3>
   </div>
}

ReactDOM.render(<Welcome/>, document.getElementById("app"));


returned value of functional compoments is JSX [ JavaScript and XML ]
Babel converts this into React.createElement

---

props ==> mechanism using which a parent passes data to child component

function Welcome(props) {
  return <div className="my">
    <h1>{props.title}</h1>
    <h3>{props.location}</h3>
   </div>
}

ReactDOM.render(<Welcome title="Welcome to ReactJS" location="Virtual"/>, document.getElementById("app"));

===

function Welcome({title, location}) {
  return <div className="my">
    <h1>{title}</h1>
    <h3>{location}</h3>
   </div>
}

ReactDOM.render(<Welcome title="Welcome to ReactJS" location="Virtual"/>, document.getElementById("app"));

======


var data = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

function ProductList({products}) {
  return <div>
      {
      products.map(product => <h1>{product.name}</h1>)
    }
   </div>
}

ReactDOM.render(<ProductList products={data} />, document.getElementById("app"));

===========

var data = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

function ProductList({products}) {
  return <div>
      {
      products.map(p => <Product product={p} />)
    }
   </div>
}

function Product({product}) {
  return <div>
    <h1>Name: {product.name} </h1>
    <h2>Price : {product.price} </h2>
   </div>
}
ReactDOM.render(<ProductList products={data} />, document.getElementById("app"));

======
yarn create react-app my-app
npx create-react-app my-app

===========================

Day 3

npx create-react-app my-app
or
yarn create react-app my-app

Recap:
* webpack ==> JavaScript build tool [ production / development, Babel for transcompile, Css-loader & style-loader, HtmlWebPackPlugin]
* React.js ==> View Library
=> React.createElement() ==> document.createElement() ==> Dynmaically creating DOM elements

Virtual DOM ==> like DOM in JSON format
==> render() ==> reconcillation ==> UI DOM

* react-dom
* react-native
* react-tv
....

* Functional Components
	JavaScript functions which return JSX

	Component.js
	or
	Component.jsx

	babel converts the returned JSX into React.createElement()

	function Component(props) {
		return <div>
				<h1>First</h1>
				<p> {props.data} </p>
		</div>
	}

	* props ==> data passed from parent to child


	function Component({data}) {
		return <div>
				<h1>First</h1>
				<p> {data} </p>
		</div>
	}

	ProductList ==> Product

* Recipe

====================================

State

Object contains state and behaviour.

* BankingAccount 
	state ==> balance
	credit(), debit() ==> behaviour

* Button
	color, size, caption ==> state
	click(), mouseMove()

Class Component

class Welcome extends React.Component {
 state = {
   name : "George",
   age: 32
 } 

 doTask() {

 } 
 render() {
   return <div>
     <h1>{this.state.name}, {this.state.age} </h1>
    </div>
 }
}

==========================================
* create-react-app ==> scaffolding code for react application
* for angular ng new ==> scaffolding code for angular application

* Using Class Components for state and behaiour
* Unit testing using RTL ==> React Testing Library [ built on JEST]
* Cypress ==> for E2E

=====================









