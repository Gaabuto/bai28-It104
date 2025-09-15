function getDataFromAPI1(callback) {
    setTimeout(() => {
        console.log("Lấy dữ liệu từ API 1");
    }, 2000);

}

function getDataFromAPI2(callback) {
    setTimeout(() => {
        console.log("Lấy dữ liệu từ API 2");
    }, 2000);

}

function getDataFromAPI3(callback) {
    setTimeout(() => {
        console.log("Lấy dữ liệu từ API 3");
    }, 2000);

}
function getDataFromAPI4(callback) {
    setTimeout(() => {
        console.log("Lấy dữ liệu từ API4");
    }, 2000);

}

function runAllTabs(){
    getDataFromAPI1(() => {
        getDataFromAPI2(() => {
            getDataFromAPI3(() => {
                getDataFromAPI4(() => {
                    console.log("Xong hết rồi nè");
                });
            });
        });
    });
}
