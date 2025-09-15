function myFilter(array,number,callback){
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
            result.push(filter(array[i]));
    }
    return result;
}
function filter(number){
    console.log(number);
}


myFilter([1,2,3,4,4,4,4,4,5],4,filter);
