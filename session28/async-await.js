function getDataFromAPI1(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API 1");
            resolve();
        }, 2000);
    })
}

function getDataFromAPI2(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API 2");
            resolve();
        }, 2000);
    });
}

function getDataFromAPI3(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API 3");
            resolve();
        }, 2000);
    });
}
function getDataFromAPI4(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API4");
            resolve();
        }, 2000);
    });
}

async function runAllTasks(){
    try{
        await getDataFromAPI1();
        await getDataFromAPI2();
        await getDataFromAPI3();
        await getDataFromAPI4();
        console.log("Xong hết rồi nè");
    }
    catch(err){
        console.log("Có lỗi xảy ra:", err);
    }
}
runAllTasks();