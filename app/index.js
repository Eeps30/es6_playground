class Person {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hello! My name is ${this.name}`;
    }
}

class SuperPerson extends Person {
    constructor(name, catchPhrase){
        super(name);
        this.phrase = catchPhrase;
    }
    sayPhrase(){
        return this.phrase;
    }
    sayBye(){
        return `My name is ${this.name}  --OH MY GOD WHAT IS THAT ON YOUR FACE???`;
    }
}

const bob = new SuperPerson('Mary-Jane', 'Up, up and awayyyyy');

console.log('Mary Jane says:', bob.sayHi());
console.log('Bob says: ', bob.sayBye());
console.log('Bob:', bob.sayPhrase());