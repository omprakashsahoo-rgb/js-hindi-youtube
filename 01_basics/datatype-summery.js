// Primitive data types

//7 types : String, Number, Boolean, null, Undefined, Symbol
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34575345784577n


// Reference (NOn Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 20.
}

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof bigNumber);