function delayedCallback(callback, number) {
    setTimeout(() => {
        callback();
    }, number);
}
function showMessage(){
    console.log("Xin chào");
}
delayedCallback(showMessage, 5000);