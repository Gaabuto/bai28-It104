function myMap(array, callback) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}
function doubleValue(element) {
    return element * 2;
    
}
const number = [4, 6, 0, 12, -10];
console.log(myMap(number, doubleValue));
