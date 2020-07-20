let array = [1,2,3 [1,2,3, [1,2,3]]];

console.log(array.flat());

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [`${value} -`, value *2]))

let hello = '          hello World';

console.log(hello)
console.log(hello.trimStart());

let hello2 = 'hello world       ';

console.log(hello2);
console.log(hello2.trimEnd());


//ya no es necesario el cath (error) {}
try {

} catch {
    error
}


//transformar de arreglos a objetos y vicebersa
let entries = [ ["name", "ariel"], ["age", 21] ];
console.log(Object.fromEntries(entries))

let mySymbl = `my Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);