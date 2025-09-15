/*callback là hàm, được truyền làm đối số cho hàm khác*/

function askForPhoneNumber(callback1) {
    console.log("Nhật gọi cho duy xin số của Lan");
    console.log("Đợi mình tí mình kiểm tra danh bạ");
    setTimeout(() => {
        console.log("Mình tìm xong rồi");
        
        const phoneNumber = "0123456789";
        callback1(phoneNumber);
    }, 3000);   
    

}
function call(phoneNumber) {
    console.log(`Nhật gọi cho Lan theo số ${phoneNumber}`);
}

askForPhoneNumber(call);