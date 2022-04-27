import './style.css';

// ES6 module system
// CommonJS require('./Person'); 
import Person from './Person'; 
import mul, {add, sub} from './compute';

console.log("Hello!!!");

let p1 = new Person("Tim", 22); // object 

console.log(p1.getName(), p1.getAge());

console.log(add(4,5));
console.log(sub(14,5));
console.log(mul(14,5));
