function newFunction (name, age, country) {
    var name = name || 'Ariel'
    var age = age || 21;
    var country = country = "ARG";
    console.log(name, age, country)
}

//es6
function newFunction2 (name = "Ariel", age = 21, country = "ARG") {
    console.log(name, age, country)
}

newFunction();
newFunction2("Pedro", 30, "COLOMBIA");

let hello = "Hello",
    world = "World",
    epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ec6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Officia minim sunt sint ad laboris Lorem cillum dolor. \n"
            + "Irure aute aute qui elit consectetur non proident Lorem minim laborum id ipsum laboris."

//ec6
let lorem2 = `Laboris voluptate dolor cillum eu qui proident mollit minim id qui minim ea.
                Lorem ex elit nisi deserunt aliqua incididunt nulla elit sunt dolor nulla excepteur.
`
console.log(lorem2);

//objects

let person = {
    'name': 'Ariel',
    'age':  21,
    'country': "ARG"
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person;
console.log(name, age);

//Propagacion

let team1 = ['oscar', 'ariel', 'julian'];
let team2 = ['melina', 'prisila', 'chelo'];

let education = ['david', ...team1, ...team2];

console.log(education);

// Declaraciones
// var declaraciones globales
// let solo en su scope

{
    var globalVar = "global";
}

{
    let localLet = "local"
    console.log(localLet);
}

console.log(globalVar);

//const son constantes

const a = "b";

console.log(a)

//clase de arrow functions

let name = "Ariel"
let age  = 21;
//es5
obj = {
    name: name,
    age: age
}
//es6
obj2 = {
    name,
    age
}

console.log(obj2);

const names = [ 
    {name: 'ariel', age: 21},
    {name: 'melisa', age: 19}
]

let listOfNames = names.map( function (item) {
    console.log(item.name)
});

let listOfNames2 = names.map((item) => {
    console.log(`Su nombre es ${item.name} y su edad es ${item.age}`)
})

//cuando la funcion tiene un solo argumento se puede hacer let name = parm => {}
// si la funcion tiene solo una linea puede escribirse asi const square = num => num * num

//promesas

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(false) {
            resolve('yaiiiii');
        } else {
            reject("NOOOOOOOOOOO");
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("no puedo creer que uso promesas"))
    .catch(error   => console.log(error));

class calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valorA = valueA;
        this.valorB = valueB;
        return this.valorA + this.valorB
    }
}

const calc = new calculator();

console.log(calc.sum(30, 20));

import { hello } from './module';

hello();

//generators

function* helloWorld () {
    if(true) {
        yield "Hello,";
    }
    if(true) {
        yield "World";
    }
}

const generatorHellow = helloWorld();
console.log(generatorHellow.next().value)
console.log(generatorHellow.next().value)
console.log(generatorHellow.next().value)
