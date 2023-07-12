function findMiddleAge (array) {
    let numberOfObject = 0;
    let middleAge = 0
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
       sum += array[i].age;
       numberOfObject++;
    };
    middleAge = sum/numberOfObject;
    return middleAge;
};

console.log(findMiddleAge(arr));