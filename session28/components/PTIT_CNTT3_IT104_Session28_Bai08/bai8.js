function myFilter(array,number,callback){
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
            result.push(callback(array[i],number));
    }
    return result;
}
function filter(value,number){
    if(value===number){
        return value;
    }
}

myFilter([1,2,3,4,4,4,4,4,5],4,filter);
