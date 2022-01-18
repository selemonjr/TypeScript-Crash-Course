// Installing TypeScript globally use => npm i -g typescript
// To check the version => tsc -v
// To compile our index.ts file to Javascript we run this command in out terminal => tsc index
// To watch the file we can run this command => tsc --save index
// To set up a configuration file in typescript run this command => tsc --init

// Basic Types
let id:number = 5;
let company: string = "Selemon";
let hired:boolean = true;
let x:any = "amazing";
let age:number;
age = 50;
let ids:number[] = [1,2,3,4,5]; // => Array of numbers..
let names: string[] = ["Evan You", "Alexandre Chopin"]; // => Array of strings..
let arr: any[] = [1,true,"Code"] // => We can insert any data type..

// Tuples => In tuples we can specify types inside the array
let person: [number,string,boolean] = [1,"code",true]
//Tuple Array
let employees:[number,string][];
employees = [
    [1,"Maxwell"],
    [2,"Andrew"]
]


// Union => Holds more than one type
let num : string | number = 3 


// Objects
// Can also be used with union
// type user = number | string

type User = {
    id:number,
    name:string
}
const users:User = {
    id:4,
    name:"Allan"
}

//Type Assertion => Tells the compiler that we want to treat an entity as a different type.
let cid:any = 1;
// let customerId = <number> cid
let customerId = cid as number

//Functions
function addNum(x:number,y:number):number {
    return x + y
}
addNum(4,5)

//Void 
function log(message: string | number):void {
    console.log(message)
}
log("Hello")

//Interface => Interface is preferred when you are creating objects.

interface UserInterface  {
    id:number,
    name:string,
    age?:number, // => ? acts as an optional operator => meaning we can provide it or leave it
}
const user: UserInterface = {
    id:2,
    name:"Tim"
}

// Classes
interface PersonInterface {
    id:number,
    name:string,
    registerUser():string
};
class Person implements PersonInterface{
    id:number // => Data modifiers include protected and private => which means we can not modify any data in our class that isn't in our class environment
    name:string
    
    constructor(id:number,name:string) {
        this.id = id,
        this.name = name
    }
    registerUser() {
        return `${this.name} has been registered`
    }
}
const Mike = new Person(1,"John")
Mike.registerUser()
// We can also extend classes

class Employee extends Person {
    position:string

    constructor(id:number,name:string,position:string) {
        super(id,name) // Must be present 
        this.position = position
    }
}

const emp = new Employee(3,"Micah","Engineer")

// Generics => Used for building reusable components

function getArr<T>(items:T[]): T[] { // => The keyword T acts as a placeholder for our types
    return new Array().concat(items)
}
let numArray = getArr<number>([1,2,3])
let strArray = getArr<string>(["Allan","Mike"])
