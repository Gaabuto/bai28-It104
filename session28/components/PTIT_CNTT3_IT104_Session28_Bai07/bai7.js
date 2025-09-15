function myForEach(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
function logEverything(element, index, arr) {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, arr);
}
const myArray = [1, 2, 3, 4, 5];
myForEach(myArray, logEverything);