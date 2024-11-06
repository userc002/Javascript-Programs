// Methods and This keyword example.
let laptop = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',
    greet: function(){
        console.log('Hello World!');
    },
    getConfig: function(){
        console.log(this.cpu);
    }
}

// Method output.
laptop.greet();

// This keyword output.
laptop.getConfig();

// Constructor function example.
function Client(name,tech){
    this.name = name;
    this.tech = tech;
}

let clients = new Client("Shadab",'JS');
clients.tech = 'Blockchain'
console.log(clients);