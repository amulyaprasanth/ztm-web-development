// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that
// is ordered. For example answer(ArrayFromAbove) should return:
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]

const answer =









// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const answer = ((arr, target) => {
    array = []
    for (let i=0; i<arr.length; i++){
        first = arr[i]
        for(let j=0; j<arr.length; j++) {
            second = arr[j]
            sum = first + second;
            if (sum === target && first!=second)
            {
                array.push(first)
            }
        }
    }
    return array
})

console.log(answer([1, 2, 3], 4))