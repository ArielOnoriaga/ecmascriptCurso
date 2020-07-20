const obj = {
    name: 'ariel',
    age: 21,
    country: "ARG",
}

let { name, ...all } = obj;
console.log(name, all);

const obj = {
    name: 'Ariel',
    age: 21,
}

const obj1 = {
    ...obj,
    country: "ARG",
}

console.log(obj1)

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("hello world"), 3000)
            : reject((new Error('test error')))
    })
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("finalizo"))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match     = regexData.exec('2019-02-10');
const year      = match[1];
const month     = match[2];
const day       = match[3]

console.log(`${day} - ${month} - ${year}`);