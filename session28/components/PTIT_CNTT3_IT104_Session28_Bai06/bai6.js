function task1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}
function task2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 1500);
    });
}
function task3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 2000);
    });
}

function runTasks(){
    task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => console.log("! Hoan thanh"))
    .catch(err => console.log("Error occurred:", err));
}
runTasks();