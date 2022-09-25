// reference type
let object1 = { value:10 };
let object = object1;
let object3 = { value:10};  
   
//context
// this keyword - denotes the object we are inside of
const object4 = {
    a: function() {
        console.log(this);
    }
}


// Instantiation - make a copy of the object and reuse the code.
class Player {
    constructor(name, type) {
        console.log("Player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`HI! I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('Wizard', this);
    }
    play() {
        console.log(`WEeeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', "Healer");
const wizard2 = new Wizard("Shawn", 'Dark Magic');