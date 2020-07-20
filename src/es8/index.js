const data = {
    frontend: "ariel",
    backend:  "ariel C",
    designer: "leandro"
}

const entries = Object.entries(data);

console.log(entries)
console.log(entries.length)

const values = Object.values(data);

console.log(values)
console.log(values.length)

const string = "hello";

console.log(string.padStart(string.length + 2, 'hi'));
console.log(string.padEnd(string.length + 3), "..");

const helloWorld = () => {
    return new Promise ( (resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello World'), 3000)
            : reject(new Error('test error'));
    }) 
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();