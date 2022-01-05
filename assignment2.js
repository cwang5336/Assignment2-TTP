// forEach

function forEach(item){
    for(let i = 0; i < item.length; i++){
        console.log(item[i])
    }
}

let numbers = [1, 2 , 3 , 4 , 5]
forEach(numbers)

// Map





// Filter




// Some (Any)



// Every



// Reduce
// Includes
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

indexOfTest = myIndexOf([1, 2, 3, 4, 5, 6], 7)
console.log(indexOfTest)

// Push

function push(array, value) {
    array.splice(array.length, 0, value);
    return array;
}

let testPush = [1, 2, 3]
console.log(push(testPush, 4))

// lastIndexOf
// Object.keys()
// Object.values()
