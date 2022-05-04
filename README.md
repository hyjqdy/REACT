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
yarn create react-app my-app
npx create-react-app my-app

* Using Class Components for state and behaiour
* Unit testing using RTL ==> React Testing Library [ built on JEST]
* Cypress ==> for E2E

=====================

npm start
yarn start

"start": "react-scripts start"

==> webpack serve --mode development ==> on port 3000


function App() {
  return <div className="App">
       <h1>Customer Application</h1>
    </div>
}

function App() {
  return (
    <div className="App">
       <h1>Customer Application</h1>
    </div>
  );
}

===================================

* state and props

bind()

var prod = {
	"name": "iPhone";
}

var p = {
	"name": "Smith",
	"update": function(txt) {
		this.name = txt;
	}
};


p.update("Roger");

let ref = p.update; //context is lost ==> doesn;t refer "this" to "p" rather it refers to "window"
ref("Anna");

let r2 = p.update.bind(prod);

r2("Anna");

 {/* <Filter filterEvent={(txt) => this.filterCustomers(txt)}/> */}
 <Filter filterEvent={this.filterCustomers.bind(this)} />

 
 ===============

 Unit testing and E2E testing

 * RTL ==> React Testing library for unit testing React component built on top of JEST
 * Angular ==> ATB ==> Angular Test Bed built on top of Jasmine

 getByXXX() ==> gets component or throws exception if not found
 queryByXXX() ==> gets component or returns null if not found
 findByXXX() ==> Promise based gets component


queryByText(/customer application/i)

 <input type="text" 
            placeholder="search by name" 
            onChange={(evt) => props.filterEvent(evt.target.value)} />

querybyPlaceHolderText("search by name");

// form elements
getByRoleName("button");
getAllByRoleName("button");
getByRoleName("input");

---
low level dom accessor

container.getElementById("id")
container.querySelector('input[type=text]');

=======================================

one file is one test suite

describe("test suite", () => {
	it("test case 1", () => {

	})
	it("test case 2", () => {

	})
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

same as

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


npm test

npm test -- --coverage --watchAll

=======================================


App.test.js is more like integration testing
render(<App />);
App.js ==> CustomerList.js ==> Filter.js and # CustomerRow.js

Testing in Isolation ==> unit testing ==> Mocking Api


Enzyme library along with React instead of RTL

shallow(<App/>); 
mount(<App/>); 
render(<App/>);

===================================================

Cypress end-to-end testing

Protractor ==> Angular 

===============

yarn add -D cypress
npm i -D cypress @cypress/instrument-cra
npm i bootstrap react-router-dom styled-components 

======================

Day 4:

yarn add -D cypress
npx create-react-app phoneapp

* Router
* ReactContext
* styled-components
* Bootstrap
* Getting data from backend ==> RESTApi calls from React

===============================================================

 "e2e": "cypress open"
 
 npm start
 npm run e2e

 cypress.json
 ==> cypress/integration folder for test specs
modify this file to specify "baseUrl" and "testFiles", "view port related ", ...

cypress / selenium / protractor ==> no need to go into framework relavant details [ handle dom]

====================================


npx create-react-app phoneapp

yarn add bootstrap styled-components react-router-dom


bootstrap is for RWD ==> Responsive Web design ==> grid system
CSS ==> @media query
* Grid system
* navbar
* card

styled.button
styled.p
styled.div
styled.h1

SPA ==> Helps in SEO

http://amazon.com/mobiles/iPhone


http://localhost:3000
http://localhost:3000/products
http://localhost:3000/cart
http://localhost:3000/products/1 ==> Details
http://localhost:3000/dfs ==> Default


* React Context

let PersonContext = React.createContext();

class PersonProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": "Asin",
      "email": "someemail",
      "update" : this.updateEmail.bind(this)
    }
  }
  updateEmail(em) {
    this.setState({
      "email": em
    })
  }
  render() {
    return <PersonContext.Provider value={{...this.state}}>
          {this.props.children}
      </PersonContext.Provider>
  }
}

function First() {
  return <>
    <h1> I am First <Second /> </h1>
    </>
}

class Second extends React.Component {
  render() {
    return <PersonContext.Consumer>
      {
        value => {
          return <>
              Name: {value.name} <br />
              Email : {value.email} <br />
            <button onClick={() => value.update("me@gmail.com")} type="button">Change</button>
            </>
        }
      }
     </PersonContext.Consumer>
  }
}

class App extends React.Component {
	render() {
		return <PersonProvider>
			<First />
		</PersonProvider>
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));

========================================

JSX needs only one root element

return <div>
	<h1>df</h1>
	<h2>dgf</h2>
	<p>df s</p>
</div>

solution:

return <React.Fragment>
			<h1>df</h1>
			<h2>dgf</h2>
			<p>df s</p>
</React.Fragment>

or

return <>
			<h1>df</h1>
			<h2>dgf</h2>
			<p>df s</p>
</>

===========================

 <link href="https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

=============

React 16: 
	  <Switch>
          
        </Switch>


React 17+:
 <Routes>
          
 </Routes>

 ==================

 Optimization and Lazy loading feature has to used

 ==

 Context.js
 index.js
 ProductList.js
 Product.js

 =============

Context.js

increment = (id) => {
	let prd = this.getItem(id);
	prd.count++;
	prd.total = prd.price * prd.count;

	this.setState({
		cart: this.state.cart // to take care or re-render
	});
}


http://localhost:3000/cart
Cart.js is rendered
  based on number of products in Cart ==> CartList has to be rendered


 CartList.js

 return (
 		<div className="col-md-2">
 			<img src={img} style={{"width": "50px"}} />
 		</div>
 		<div className="col-md-2">
 				plus button
 		</div>
 		<div className="col-md-2">
 				minus button
 		</div>
 		<div className="col-md-2">
 				price
 		</div>
 		<div className="col-md-2">
 				count
 		</div>
 		<div className="col-md-2">
 				total
 		</div>

 )

 =========================

RESTapi call 

20 min of this application

=====

Advance React Concepts

===================================


Day 5

* react-router-dom
	BrowserRouter, Routes, Route, Link
	Lazy loading Component ==> FCP React.lazy(), Suspense ==> fallback

* bootstrap, font-awesome
* styled-components ==> DOM elements and React Elements can apply CSS based on props
* React Context ==> to avoid passing props thro intermediary components
	=> Provider
	=> Consumer

Context.js ==> increment = (id) => {}
Task: Cart.js and CartList.js

==================

Pending ==> Details.js ==> Functional Component Hooks

React ==> RESTApi call to fetch JSON data
* XmlHttpRequest
* fetch
* axios
phoneapp>npm i axios
Promise based HTTP client 

phoneapp>npm i axios


Fake RESTApi

json-server
JSON Server: Get a full fake REST API with zero coding in less than 30 seconds 

data.json
{
    "customers": [],
    "products": [],
    "orders": []
}

npm i json-server -g
json-server --port 1234 --watch data.json

OR

npx json-server --port 1234 --watch data.json

http://localhost:1234/customers
http://localhost:1234/products
http://localhost:1234/products/3
http://localhost:1234/products?company=apple
http://localhost:1234/orders

GET, POST, PUT and DELETE

==============================

* React Component Life-cycle

Re-rendering of component ==> state or props change component re-renders

class Child extends React.Component {
  render() {
    console.log("child renders");
    return <h1>Child : {this.props.name} </h1>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
     console.log("parent renders");
    return <>
      Name : {this.state.name} <br />
      Count: {this.state.count} <br />
      <Child name={this.state.name} /> <br />
      <button type="button" onClick={()=>this.increment()}>Inc</button>
     </>
  }
}
ReactDOM.render(<Parent/>, document.getElementById("app"))

this.props.name !== nextProps.name

================================
Avoid re-rendiring of child class component:

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps)    
  }
  render() {
    console.log("child renders");
    return <h1>Child : {this.props.name}  </h1>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
     console.log("parent renders");
    return <>
      Name : {this.state.name} <br />
      Count: {this.state.count} <br />
      <Child name={this.state.name}  /> <br />
      <button type="button" onClick={()=>this.increment()}>Inc</button>
     </>
  }
}
ReactDOM.render(<Parent/>, document.getElementById("app"))

===========================
Avoid re-rendering of child class component:

class Child extends React.PureComponent {
  render() {
    console.log("child renders");
    return <h1>Child : {this.props.name}  </h1>
  }
}

==============

Avoid re-rendering of child functional component:

function Child(props) {
    console.log("child renders");
    return <h1>Child : {props.name}  </h1>
  }

Memoization pattern

let MemoChild = React.memo(Child); ===> HoC render() { if condition return; else Child()}

Replace:
 <Child name={this.state.name}  /> <br />
with
 <MemoChild name={this.state.name}  /> <br />

===

function Child(props) {
    console.log("child renders");
    return <h1>Child : {props.name}  </h1>
}

let MemoChild = React.memo(Child);

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
     console.log("parent renders");
    return <>
      Name : {this.state.name} <br />
      Count: {this.state.count} <br />
      <MemoChild name={this.state.name}  /> <br />
      <button type="button" onClick={()=>this.increment()}>Inc</button>
     </>
  }
}
ReactDOM.render(<Parent/>, document.getElementById("app"));


Customize:

function doCheck(prevProps, nextProps) {
  console.log(prevProps, nextProps);
  return prevProps.name !== nextProps.name;
}
let MemoChild = React.memo(Child, doCheck);


=====================================

ErrorBoundary

React 16 introduces a new concept of an “error boundary”.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
           return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

<App>
<ErrorBoundary>
		<A/>
		<B/>
</ErrorBoundary>

<ErrorBoundary>
		<C/>
		<D/>
		<E/>
</ErrorBoundary>
</App>

===================================
React hooks: ==> for functional components

Hooks are a new addition in React 16.8
They let you use state and other React features without writing a class.

class components ==> state and behaviour for side effects, lifecycle methods
		extends Component or extends PureComponent

functional components ==> pure view components


React Hooks:

1) useState()
can declare state variables in functional components

function App() {
	let [count, setCount] = React.useState(0);
	let [user, setUser] = React.useState("Roger");
	return <>
		{count} {user} <br/ >
	    <button onClick={()=>setCount(count + 1)}>Inc</button>
	</> 
}
ReactDOM.render(<App/>, document.getElementById("app"))

same as:

class App extends Component {
	state = {
		count : 0,
		user : "Roger"
	}

	setCount(c) {
		this.setState({
			count: c;
		})
	}

	setUser(u) {
		this.setState({
			user: u;
		})
	}
}

2) useReducer
		if state is complex and conditional mutation

		"cart" contains products. each product has ==> id, count, price

		actions:
		"ADD_TO_CART"
		"REMOVE_FROM_CART"
		"CLEAR_CART"
		"INCREMENT"

	Action objects are of format 

	{
		type: "",
		"payload": data
	}

	Example:

	{
		"type": "ADD_TO_CART",
		"payload" : {id: 2, "count": 1, "name" : "pin"}
	}

Example:
    let intialState = { count : 0};

  let countReducer = (state, action) => {
  	switch(action.type) {
  		case "INCREMENT" : return {count : state.count + action.payload};
  		case "DECREMENT" : return {count : state.count - 1};
  		default : return state;
  	}
  }

function App() {
	let [state, dispatch] = React.useReducer(countReducer, intialState);
	function increment() {
  		let action = {"type": "INCREMENT", payload: 10};
  		dispatch(action);
  	}

  	return <>
  		Count: {state.count} <br />
  		<button onClick={increment}>Inc</button>
  	</>
}
ReactDOM.render(<App/>, document.getElementById("app"))


=========

 let someReducer = (state, action) => {
 	switch(action.type) {
 		case "X" : {...state, count: state.count +1 };
 	}

=================================

3) useEffect()
	to simulate life cycle methods of React class component


function App() {
	let [count, setCount] = React.useState(0);
	let [user, setUser] = React.useState("Roger");

	// componentDidUpdate
	React.useEffect(() => {
		console.log("component did update, effect 1", count);
	});
 

	// componentDidMount
	React.useEffect(() => {
		console.log("component did mount, effect 2", count);
	}, []);

	// 
	React.useEffect(() => {
		console.log("component did mount, effect 3", count);
	}, [user]);

	function increment() {
		setCount(count + 1);
	}
  	return <>
  		Count: {count} <br />
  		<button onClick={increment}>Inc</button>
  	</>
}
ReactDOM.render(<App/>, document.getElementById("app"));


componentWillUnMount()
React.useEffect(() => {
    console.log("MOUNT", props);

    return () => console.log("UNMOUNT", props)
  }, []);

================================

4) useContext();

is a react hook for context Consumer

ProductList.js ==> Class Component
import { Component } from "react";
import { ProductConsumer } from "./Context";
import Product from './Product';
export default class ProductList extends Component {
    render() {
        return <div className="container">
                <div className="row">
                    <ProductConsumer>
                        {
                            value => {
                                return value.products.map(p => <Product product={p} key={p.id}/>)
                            }
                        }
                    </ProductConsumer>
                </div>
        </div>
    }    
}

===
ProductList.js ==> Functional Component

import Product from './Product';
import {ProductContext} from './Context';

export default function ProductList() {
  		let ProductContext = React.useContext(ProductContext); // get consumer
  		let CustomerContext = React.useContext(CustomerContext);
  		let {products} = ProductContext;
  		let {user} = CustomerContext;
        return <div className="container">
                <div className="row">
                  {user.name}
                   {
                          
                      return products.map(p => <Product product={p} key={p.id}/>)
                   }
                   
                </div>
        </div>
}

====


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

const MemoButton = React.memo(Button);

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = () => {
		setAge(age + 1)
	};

	const incrementSalary = () => {
   		setSalary(salary + 1000)
	}
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("app"));


===============================


function App() {
	let [state, dispatch] = React.useReducer(countReducer, intialState);
	function increment() {
  		let action = {"type": "INCREMENT", payload: 10};
  		dispatch(action);
  	}

  	return <>
  		Count: {state.count} <br />
  		<button onClick={increment}>Inc</button>
  	</>
}
ReactDOM.render(<App/>, document.getElementById("app"))


Whenever state or props changes ==> functional Component is re-loaded

===

5) useCallback

const incrementAge = React.useCallback(() => {
		setAge(age + 1)
	},[age]);

const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
}, [salary]);

========================================

Task:
PhoneApp
* useContext
* useParams and complete Details.js

import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function Details() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
}

<Route path="/details/:id" element={<Details />} />

==============================================================

 Day 6
 
 * React Context
 ==> Provider and Consumer
* Avoid re-rendering of child components
1) Class Component => shouldComponentUpdate() / PureComponent
2) Functional Component ==> React.memo(Component); or  React.memo(Component, applyCheck); 
function applyCheck(prevProps, nextProps) {..}

* ErrorBoundary => fallback component if exceptions are propagated from component

 * React Hooks 16.8 version 
 1) useState() ==> state variable and mutation function ==> internally calls setState()
 2) useReducer() ==> state is complex; conditionally mutate the state "ADD_TO_CART", "REMOVE_FROM_CART", "CLEAR_CART"
 3) useEffect() ==> simulate Life-cycle methods like componentDidMount(), componentDidUpdate(),
 4) useContext() ==> ReactContext Consumer
 5) useCallback() ==> memoize callback function [ Avoid re-rendering]


===

Task 
Details.js 
6) useParams()

Details.js
* useParams()

http://localhost:8080/details/5

<Route path="/details/:id"> element={} />
   
Context ==> filter products

API call to server from Details.js
http://localhost:8080/details/32

=======================================

Details.js

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function Details() {
        let [product, setProduct] = useState(null);
        let { id } = useParams();
        
        useEffect(() => {
           console.log(id);
           axios.get("http://localhost:1234/products/" + id).then( response => {
            let prd = response.data;
            if (prd !== null) {
                if(!prd.img.startsWith("/"))
                prd.img = "/" + prd.img;
                setProduct(prd);
             }
        });
        }, [id]);

        if (product != null) {
           let {title, img, price} = product;
           return (
              <div className="container">
                 <h1>Name : {title}</h1>
                 <h1>Price : {price}</h1>
                 <img src={img} alt={name} />
              </div>
           )
        } else {
           return <div>Product doesn't exist</div>
        }
}:


================

Building Your Own Hooks: use existing hooks and create your own re-usable function

ApiHook.js

export function useApiCall(uri) {
    const [data, setData] = React.useState(null);
    const [done, isDone] = React.useState(false);

    React.useEffect(() => {
        // IIFE
        (async () => {
            let response = await fetch(url);
            let retData = await response.json();
            setData(retData);
            isDone(true); 
        })();
    },[uri]);

    return {
        done,
        data
    }
}

---
CustomHookComponent.js

import { useApiCall } from "./ApiHook";

export default function CustomHookComponent () {
    let {done, data} = useApiCall("http://jsonplaceholder.typicode.com/users");
    if(!done) return <h1> Loading .....</h1>
    else {
        return <>
          {
            data.map(user => <h2 key={user.id}>{user.name}</h2>)
          }
        </>
    }

}


===

useCacheState() CustomHook for useState()

--> pull the state from localStorage rather than In-memory

window.localStorage

======================

React Reference ==> references which can be assigned to any component

emailRef = React.createRef(); // reference

or

emailRef = React.useRef(); // reference


class App extends React.Component {
  emailRef = React.createRef(); // reference 
  render() {
    return <>
        <input type="text" ref={this.emailRef} />
      <button onClick={() => this.doTask()}>Click</button>
     </> 
  }
  doTask() {
    console.log(this.emailRef.current.value);
    this.emailRef.current.focus();
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));



class Parent .. {
	 emailRef = React.createRef(); // reference 

	 ...
	 <Child ref={this.emailRef} />

}

===

ForwardRef

https://reactjs.org/docs/forwarding-refs.html
https://www.primefaces.org/primereact/datatable/filter/
https://www.telerik.com/kendo-react-ui/

========================================================

HOF ==> high order functions are functions which accept a function / return a function

HOC ==> High Order Component
==> accept component and return a component

React.memo() is a HOC

const MemoTitle = React.memo(Title); ==> added conditional render() of component

* to introduce props and behaviour
* conditionaly return component 


Building HOC:
withCounter.js

const withCounter = (WrappedComponent) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				count: 0
			}
		}

		increment = () => {
			this.setState({
				count : this.state.count + 1
			})
		}

		render() {
			return <WrappedComponent count={this.state.count} increment={this.increment} />
		}
	}
}

class DivComponent extends React.Component {
	return <>
		Count {this.props.count} <br />
		<button type="button" onClick={() => this.props.increment()}>Click</button>
	</>
}



const DivWithCounter = withCounter(DivComponent);

function App() {
	return <DivWithCounter />
}


===

HOC conditionally render

withLoading = (WrappedComponent) => {
..
render() {
			if(this.props.loading) {
				return <h1>Loading!!!.</h1>
			}
			return <WrappedComponent />
		}
}

const ProductListWithLoading = withLoading(ProductList);

function App() {
	...
	return <>
		<ProductListWithLoading loading={done} />
	</>
}


==============================================================
 
State Management with Redux

Redux: single store ==> store can have multiple state ==> Single source of truth

Reducers:
1) CustomerReducer
2) ProductReducer
3) CartReducer
4) PaymentReducer

single RootReducer per redux application

RootReducer gets state from store and action dispatched from view; delegates them to all reducers

========================

npx create-react-app reduxexample


reduxexample$ npm i redux react-redux

---

ActionTypes.js

export const CREATE_NEW_CONTACT = "create_new_contact";
export const REMOVE_CONTACT = "remove_contact";

ActionCreators.js

import {CREATE_NEW_CONTACT, REMOVE_CONTACT} from './ActionTypes';

export const createContact = (contact) => {
	return {
		type: CREATE_NEW_CONTACT,
		contact: contact
	}
}


export const deleteContact = (email) => {
	return {
		type: REMOVE_CONTACT,
		email: email
	}
}

---

ContactReducer.js

import {CREATE_NEW_CONTACT, REMOVE_CONTACT} from './ActionTypes';

export default (state = [], action) => {
	switch(action.type) {
		case CREATE_NEW_CONTACT:
			return [
				...state,
				{...action.contact}
			]
		case REMOVE_CONTACT:
			return state.filter(contact => contact.email !== action.email)
		default:
			return state;
	}
};


=============

Day 7

Docker Desktop ==> MongoDB, ExpressJS connect to MongoDB

Redux Middleware

npx create-react-app reduxex2

reduxex2$ npm i redux react-redux redux-thunk axios

=====================


Recap: 
State Management using Redux ==> 3rd party library

ReactContext for passing props to Consumer 

REDUX_DEVTOOLS_EXTENSION ==> easy to debug redux state, action, diff, replay the events

https://www.npmjs.com/package/redux-logger

1. REDUX

* Action object contains state and payload
 {
 	type
 	payload
 }

* Action Creators are helper functions which take data from view and 
returns an action object 

* Action objects are dispathed to Redux Store from view component

"GET_ITEMS"

dispatch({type:"GET_ITEMS"});

* store ==> place where state resided
store is the one which intercepts action dispatched from view and delegates it to root-reducer

* Reducer
	functions which take the state from store and action dispatched from view
	makes a copy of state
	mutate the state
	return the state
	returned state is updated in the store


2. REACT
	react-redux

	* compose ==> HOC ==> passes state and dispatch fns to Component

	compose(
		mapStateToProps,
		mapDispatchToProps
	)(App);

	to the "App" component state and dispatch are injected as props

==============================

Redux Middleware
https://redux.js.org/tutorials/fundamentals/part-6-async-logic

Thunk is a subroutine ==> closure

function thunk(arg) { ==> arg can be dispatch() or action object
	if(arg === action) {

		} else if (arg === fn) {
			fn();
		}
}


============================

Redux Hooks instead of using compose();

useSelector():
The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.

useDispatch():
This hook returns a reference to the dispatch function from the Redux store. ==> similar to mapDispatchToProps




Redux Saga:

built using ES6 Generators

Normal fns have a single return value

Generators can have multiple return values;

function* fetchData() {
	console.log("action 1");
	console.log("action 2");
	yield "data 1";
	console.log("action 3");
	yield 100;
	console.log("action 4");
	console.log("action 5");
	yield "all good :-)"
}

let iter = fetchData();

iter.next(); // data 1, done:false
...
iter.next(); // 100 
...

iter.next(); // all good

iter.next(); // no value , done:true


Aggregator

Airbnb

MMT
	Flights
	Hotels

=========================================

Resume in 15 min







