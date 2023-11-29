// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: 55};
// A: an object with a number variable

let e = [3]
// A: number[] 

let f;
// A: any - ambigous 

let g = []
// A: I guessed array, but it shows "never[]" which represents `values that never occur`



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear?: number,
} = {
    title: 'Lose Yourself'
};
// A: releaseYear is set up as a type but never declared in the actual object...
// fixed by using a ? after releaseYear to make it optional...

let prices = [100, 200, 300];
prices[0] = '$100';
// A: can't change number type to string type

function myFunc(a: number, b: number): number {}
// A: the non-arrow syntax threw me, but this isn't returning anything even though it says explicitly it should return a number.



/* CODEWARS

Q1: Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/

function smash (words: string[]): string {
    return words.join(' ')
}


/*
Q2: array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


*/


function arrayDiff(a: number[], b: number[]) {
    for (const num of b) {
    a = a.filter(x => x != num)
    }
    return a
  }


  // note I did the problems in javascript on codewars, but put them in typescript here to get used to using it....