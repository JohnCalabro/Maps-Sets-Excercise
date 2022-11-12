// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])
//Answer:
// Set(4) {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?

const ref = [...new Set("referee")].join("")
console.log(ref)
///Answer:  (removes dupes that's why it returns "ref" is string b/c we joined array)
// "ref"

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//ANSWER:
// Map(2) {Array(3) => true, Array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns 
// true or false if that array contains a duplicate

function hasDuplicate(arr){
  return new Set(arr).size !== arr.length;
} //if the new sets size doesn't = the array's length we know there is no dupe, 
//because sets can't have duplicates.

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where 
// the keys are numbers and the values 
// are the count of the vowels in the string.


const str = [['hello', 'yeahuh'], ['pizza', 'good']];

const newMap = new Map(str)
console.log(newMap)

const word = 'hello'
console.log(Array.from(word))
function vowelCount(str){
  const array = Array.from(str)
  console.log(array)
  

}



function vowelCount(str){   
  const vows = 'aeiou'    
  const newMap = new Map();
  let counter = 0;
 
  for (let char of str){
    // console.log(char)
    if(vows.indexOf(char) !== -1){
    
      counter++
      console.log(counter)

      let lowerC = char.toLowerCase();

      newMap.set(lowerC, counter) // counter increments an extra time don't know why
      //solution confused me as well.
      
     
    }
  }
  
  return newMap
}
 