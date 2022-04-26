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



