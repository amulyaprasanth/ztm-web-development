 //BigInt
 // to convert a number to bigInt -- add n to the end of the number
 const bigInt = 1n;
 console.log(typeof bigInt)


 // Nullish Coalescing Operator?

let andrei_pokemon = {
    pikachu: {
        species: 'Mouse pokemon',
        height : 0.8,
        weight: 50, 
        power : 'lightning'
    }
}
let power = andrei_pokemon?.pikachu?.power ?? 'no power' // returns right handside operator if the lefthand side is null
 // or undefined or else returns left hand side
console.log(power)


 // Optional Chaining Operator?
 //The optional chaining operator (?.) accesses an object's property or calls a function.
 // If the object is undefined or null, it returns undefined instead of throwing an error.
let will_pokemon = {
    pikachu : {
        species : 'Mouse pokemon',
        height : 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichu : {
        species : 'Mouse pokemon',
        height : 0.8,
        weight: 30
    }
}

if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight
} else {
    let weight2 = undefined;
}

// with Optional Chaining Operator
let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3);