// forEach

function myEach(item){
    for(let i = 0; i < item.length; i++){
        console.log(item[i])
    }
}

console.log("Test for forEach")
let numbers = [1, 2 , 3 , 4 , 5]
myEach(numbers)

// Map

function myMap(array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {      
      result.push(cb(array[i]));
    }
    console.log(result);
  }

  console.log("Test for myMap")
  myMap([1, 2, 3, 4, 5], item => item + 1);

// Filter

function myFilter(array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
      if (cb(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }

  console.log("Test for myFilter")
  console.log(myFilter([1, 2, 3, 4, 5], item => item >= 3))

// Some (Any)

function mySome(array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
      if (cb(array[i])) {
        result.push(array[i]);
      }
    }
    if(result.length >1){
        return true
    } else{
        return false
    }
  }

  console.log("Test for mySome")
  console.log(mySome([1, 2, 3, 4, 5], item => item >= 3))


// Every

function myEvery(array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
      if (cb(array[i])) {
        result.push(array[i]);
      }
    }
    if(result.length == array.length){
        return true
    } else{
        return false
    }
  }

  console.log("Test for myEvery")
  console.log(myEvery([1, 2, 3, 4, 5], item => item >= 3))

// Reduce

function myReduce(array){
    result = 0
    for(let i = 0; i < array.length; i++){
        result += array[i]
    }
    return result
}

console.log("Test for myReduce")
let myReduceTest = [1, 2, 3]
console.log(myReduce(myReduceTest))

// Includes

function myIncludes (array, value){
    for(let i=0; i< array.length; i++){
        if(array[i] == value){
            return true
        } 
    }
    return false
}

console.log("Test for myIncludes")
myIncludesTest = [1, 2, 3, 4, 5, 6]
console.log(myIncludes(myIncludesTest, 4))

// indexOf

function myIndexOf(array, target) {
    result = -1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element == target) {
            result = index;
            break
        }
    }
    return result
}

console.log("Test for myIndecOf")
indexOfTest = myIndexOf([1, 2, 3, 4, 5, 6], 7)
console.log(indexOfTest)

// Push

function myPush(array, value) {
    array.splice(array.length, 0, value);
    return array;
}

console.log("Test for myPush")
let testPush = [1, 2, 3]
console.log(myPush(testPush, 4))

// lastIndexOf

function myUnshift(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value)  {
        return i; 
      }
    }
    return -1;
  };

  console.log("Test for myUnshift")
  let myUnshiftTest = [1, 2, 3, 4, 2]
  console.log(myUnshift(myUnshiftTest, 2))

// Object.keys()



// Object.values()
