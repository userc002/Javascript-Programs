// Objects, Complex objects and For in loop example.

let client = {
    name: 'Shadab',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Acer'
    }
}

// Object output.
console.log(client.name);

// Complex object output.
console.log(client.laptop.brand);

// For in loop output.
for(let key in client)
{
    console.log(key, client[key]);
}