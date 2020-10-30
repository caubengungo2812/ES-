export class Animal {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    meow(sound = "sound") {
        console.log(sound);
    }
    get MetaData() {
        return `Name: ${this.name}, Legs: ${this.legs}`;
    }
    static return10() {
        return 10;
    }
}

export class Dog extends Animal {
    constructor(name, legs, tail) {
        super(name, legs);
        this.tail = tail;
    }
}