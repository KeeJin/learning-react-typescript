# Variable declaration
There are 3 types of keywords used in variable declaration: let, var and const.

## let keyword
- block scoped
- hoisting does not initialise variable.
- can be updated but not re-declared

##### Example 1: 
```
let greeting = "say Hi";

if (true) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined
``` 

##### Example 2: 
```
let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
```

## var keyword
- not block scoped (locals will override globals without warning)
- hoisting initialises variable to undefined
- can be re-declared and updated

##### Example 1: 
```
var greeter = "hey hi";

if (true) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"
```

## const keyword
- block scoped
- cannot be updated or re-declared

##### Example 1:
```
const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable. 
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
```