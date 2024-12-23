
function login() {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let messageElement = document.getElementById('messageElement');


    if (userName === 'ubeydemiiri' & password === 'ubeyde') {

        messageElement.textContent = 'تم تسجيل الدخول';
        messageElement.className ="message-true  btn btn-primary w-100 mt-4"


    } else {
        messageElement.textContent = 'اسم المستخدم اول كلمه المرور غير صحيحين';
        messageElement.className ="message-false btn btn-danger mt-4 w-100"


    }
}