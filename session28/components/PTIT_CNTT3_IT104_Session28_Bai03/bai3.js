function progessArray(arr, callback) {
    setTimeout(() => {
        const result = arr.map(item => item * 2);
        callback(result);
    }, 2000);
}
function showResult(result){
    console.log("Phần tử thứ: ", result);
}
progessArray([1,2,3,4,5], showResult);
