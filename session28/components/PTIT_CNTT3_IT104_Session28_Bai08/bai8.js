function myFilter(array,number,callback){
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
            if(callback(array[i],number)){
                result.push(array[i]);
            }
    }
    return result;
}
function filter(value,number){
    if(value===number){
        return true;
    }
    return false;
}

console.log(myFilter([1,2,3,4,4,4,4,4,5],4,filter));
