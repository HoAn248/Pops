let eyes = document.querySelectorAll('.register-input div i')
document.querySelectorAll('input').forEach(e => {
    e.onblur = () => {
        if ((email.value === '') || (password.value === '')) {
            login.classList.remove('login-active')
        } else {
            login.classList.add('login-active')
        }
    }
})




eyes.forEach((e)=>{
    e.onclick = ()=>{
        if(e.className == 'fa-regular fa-eye'){
            e.className = 'fa-regular fa-eye-slash'
            e.parentElement.querySelector('input').type = 'text';
        }
        else{
            e.parentElement.querySelector('input').type = 'password';
            
            e.className = 'fa-regular fa-eye'
        }
        
    }
})


const boxMes = document.querySelector('.result')
const input = document.querySelectorAll('input')
const submit = document.querySelector('#register-submit')
function is_phonenumber(phonenumber) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (phonenumber.match(phoneno)) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function errorMes(element,mes){
    if(element.parentElement.classList.value === 'register-input'){
        element.parentElement.querySelector('span').innerHTML = `${mes}`
    }else{
        element.parentElement.parentElement.querySelector('span').innerHTML = `${mes}`
    }
}
function passwordLength(password) {
    let check = true
    if (password.length < 6) {
        check = false
    }
    return check
}
function checkTK(values) {
    let number = '0123456789'
    let arrEmail = values.value.split('')
    let is_phone = true
    if(values.placeholder === 'Nhập số điện thoại hoặc email'){
        for (let i = 0; i < arrEmail.length; i++) {
            let check = number.search(arrEmail[i])
            if (check === -1) {
                is_phone = false
                break
            }
        }
        if (is_phone) {
            let check = is_phonenumber(values.value)
            if (check) {
                errorMes(values,'')
            }
            else {
                errorMes(values,'Số điện thoại không hợp lệ.')
            }
        }else {
            let check = validateEmail(values.value)
            if (check) {
                errorMes(values,'')
            }
            else {
                errorMes(values,'Email không đúng định dạng. Vui lòng kiểm tra lại.')
            }
        }
    }else if(values.placeholder === 'Mật khẩu'){
        let check = passwordLength(values.value)
        if(check === false){
            errorMes(values,'Nên đặt mật khẩu từ 6 đến 12 kí tự.')
        }else{
            errorMes(values,'')
        }
    }else{
        if(document.querySelector('#rpass').value.trim() === document.querySelector('#pass').value.trim()){
            errorMes(values,'')
        }else{
            errorMes(values,'Xác nhận mật khẩu không đúng.')
        }
    }
    
    
    
}
input.forEach(e=>{
    e.onblur = ()=>{
        if(e.value.trim() === ''){
            errorMes(e,'Nhập thông tin ở đây')
        }else{
            checkTK(e)
            let mesEr = document.querySelectorAll('.register-input span')
            let check = true
            for (let index = 0; index < mesEr.length; index++) {
                // console.log(mesEr[index].);
                if(mesEr[index].textContent !== undefined ){
                    check = false
                    // break;
                }
            }
            // console.log(check);
            if(check){
                submit.classList.add('register-active')
            }else{
                submit.classList.remove('register-active')
            }
                 
        }
    }
})
submit.onclick = (e)=>{
    e.preventDefault();
}

