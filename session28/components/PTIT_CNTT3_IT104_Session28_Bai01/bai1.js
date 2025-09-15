function calculate(a,b,callback){
    const sum = a + b;
    callback(sum);
}
function showSum(sum){
    console.log("Tổng là: ", sum);
}
calculate(1,2,showSum);