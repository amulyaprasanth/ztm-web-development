// added .flat method()
const array = [1, [2, 3], [4, 5]]
array.flat() // converts nested array to a single array

const array2  = [1, 2, [3, 4, [5]]]
array2.flat(2) // converts nested array to a given level


const entries = ['bob', 'sally',,,,'cindy']
entries.flat()

// added Flatmap method
flatMap()

// adde trim start and trim end method
const userEmail = '     eddytheeagle@gmail.com'
const userEmail2 = 'johnnydangerous@gmail       '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

// fromentries
const userProfiles = [ ['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
const obj = Object.fromEntries(userProfiles)
console.log(obj)

// try catch block
/* A try catch block. If the code in the try block fails, it will run the code in the catch block. */
try {
    bob + 'hi'
} catch {
    console.log('you messed up')
}