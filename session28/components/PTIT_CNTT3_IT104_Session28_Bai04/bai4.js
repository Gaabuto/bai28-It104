function displayNumbers(callback){
    const start = 1;
    setInterval(() => {
        callback(start++);
    }, 1000);
}
function showNumber(number){
    console.log(number);
}
displayNumbers(showNumber);