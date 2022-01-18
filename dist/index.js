"use strict";
// Installing TypeScript globally use => npm i -g typescript
// To check the version => tsc -v
// To compile our index.ts file to Javascript we run this command in out terminal => tsc index
// To watch the file we can run this command => tsc --save index
// To set up a configuration file in typescript run this command => tsc --init
// Basic Types
let id = 5;
let company = "Selemon";
let hired = true;
let x = "amazing";
let age;
age = 50;
let ids = [1, 2, 3, 4, 5]; // => Array of numbers..
let names = ["Evan You", "Alexandre Chopin"]; // => Array of strings..
let arr = [1, true, "Code"]; // => We can insert any data type..
// Tuples => In tuples we can specify types inside the array
let person = [1, "code", true];
//Tuple Array
let employees;
employees = [
    [1, "Maxwell"],
    [2, "Andrew"]
];
// Union => Holds more than one type
let num = 3;
const users = {
    id: 4,
    name: "Allan"
};
//Type Assertion => Tells the compiler that we want to treat an entity as a different type.
let cid = 1;
// let customerId = <number> cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
addNum(4, 5);
//Void 
function log(message) {
    console.log(message);
}
log("Hello");
const user = {
    id: 2,
    name: "Tim"
};
;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    registerUser() {
        return `${this.name} has been registered`;
    }
}
const Mike = new Person(1, "John");
Mike.registerUser();
// We can also extend classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // Must be present 
        this.position = position;
    }
}
const emp = new Employee(3, "Micah", "Engineer");
// Generics => Used for building reusable components
function getArr(items) {
    return new Array().concat(items);
}
let numArray = getArr([1, 2, 3]);
let strArray = getArr(["Allan", "Mike"]);
