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






