// ----------------------------------------------------------------------------------
// Name: Jimmy Klein 
// Abstract: Some & Every Exercises 
// ----------------------------------------------------------------------------------




// ----------------------------------------------------------------------------------
// Name: Problem One
// Problem: Write a function called hasOddNumber which accepts an array and returns
// true if the array contains at least one odd number, otherwise it returns false.
// ----------------------------------------------------------------------------------
function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    })
  }
  // test 
  hasOddNumber([1,2,2,2,2,2,4]) // true
  hasOddNumber([2,2,2,2,2,4]) // false 

// ----------------------------------------------------------------------------------
// Name: Problem Two
// Problem: Write a function called hasAZero which accepts a number and returns true 
// if that number contains at least one zero. Otherwise, the function should return 
// false
// ----------------------------------------------------------------------------------
function hasAZero(num){
  return num.toString().split('').some(function(val){
    return val === '0';
  })
}

// test
hasAZero(33321232131012) // true
hasAZero(1212121) // false

// ----------------------------------------------------------------------------------
// Name: Problem Three
// Problem: Write a function called hasOnlyOddNumbers which accepts an array and 
// returns true if every single number in the array is odd. If any of the values in
// the array are not odd, the function should return false.
// ----------------------------------------------------------------------------------
function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val % 2 !== 0;
    })
  }
  
// test
hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false

// ----------------------------------------------------------------------------------
// Name: Problem Four
// Problem: Write a function called hasNoDuplicates which accepts an array and 
// returns true if there are no duplicate values (more than one element in the array 
// that has the same value as another). If there are any duplicates, the function should 
// return false.
// ----------------------------------------------------------------------------------
function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }
  
// test
hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true

// ----------------------------------------------------------------------------------
// Name: Problem Five
// Problem: Write a function called hasCertainKey which accepts an array of objects
// and a key, and returns true if every single object in the array contains that key.
// Otherwise it should return false.
// ----------------------------------------------------------------------------------
function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }

// test
// let arr = [
//    {title: "Instructor", first: 'Elie', last:"Schoppik"},
//    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//    {title: "Instructor", first: 'Matt', last:"Lane"},
//    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//  ]

// hasCertainKey(arr,'first') // true
//  hasCertainKey(arr,'isCatOwner') // false

// ----------------------------------------------------------------------------------
// Name: Problem Six
// Problem: Write a function called hasCertainValue which accepts an array of objects
// and a key, and a value, and returns true if every single object in the array 
// contains that value for the specific key. Otherwise it should return false.
// ----------------------------------------------------------------------------------
function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key] === searchValue;
  })
}


// test
// let arr = [
//    {title: "Instructor", first: 'Elie', last:"Schoppik"},
//    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//    {title: "Instructor", first: 'Matt', last:"Lane"},
//    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//  hasCertainValue(arr,'title','Instructor') // true
//  hasCertainValue(arr,'first','Elie') // false