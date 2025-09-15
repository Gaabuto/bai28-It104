function checkCondition(condition, callback) {
    setTimeout(() => {
        if(condition){
            callback(true);
        }
        else{
            callback(false);
        }
    }, 2000);
}
function isYang(number){
    if(number > 0){
        return true;
    }
    else{
        return false;
    };
}
function display(result){
    console.log( "Điều kiện trả về: ", result);
}
checkCondition(isYang(3), display);
