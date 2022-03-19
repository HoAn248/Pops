let login = document.querySelector('#login-submit')
let result = document.querySelector('.result')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let closeResult = document.querySelector('.fa-xmark')
const url = 'https://6201ecb3b8735d00174cb652.mockapi.io/PopsUsers'
closeResult.onclick = () => {
    result.classList.remove('result-active')
}
document.querySelectorAll('input').forEach(e => {
    e.onblur = () => {
        if ((email.value === '') || (password.value === '')) {
            login.classList.remove('login-active')
        } else {
            login.classList.add('login-active')
        }
    }
})
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
function error(mess,tag) {
    result.classList.add('result-active')
    console.log(tag);
    if(tag === undefined){
        result.querySelector('h3').textContent = `${mess}`
    }else{
        result.querySelector('h3').innerHTML = `${mess} ${tag}`
    }
    
}

login.onclick = (e) => {
    e.preventDefault();

    if (login.classList.value === 'login-active') {
        let users = checkUsers(email.value.trim(), password.value.trim())
        let check = passwordLength(password.value.trim())
        if(check){
            users.then(data => {
                if (data === 1) {
                    window.open('http://127.0.0.1:5500/Pops/index.html', "_self")
                } else {
                    error(`Email hoặc mật khẩu không đúng. Nếu bạn chưa có tài khoản, vui lòng chọn`,'<a href="http://127.0.0.1:5500/Pops/html/register.html">ĐĂNG KÝ</a>')
                }
    
            })
        }else{
            error('Mật khẩu phải có ít nhất 6 ký tự.')
        }
        checkTK(email.value.trim())
    }

}
function checkTK(values) {
    let number = '0123456789'
    let arrEmail = values.split('')
    let is_phone = true
    for (let i = 0; i < arrEmail.length; i++) {
        let check = number.search(arrEmail[i])
        if (check === -1) {
            is_phone = false
            break
        }
    }
    if (is_phone) {
        let check = is_phonenumber(values)
        if (check) {
            return 1
        }
        else {
            error('Số điện thoại không hợp lệ.')
        }
    }
    else {
        let check = validateEmail(values)
        if (check) {
            return 1
        }
        else {
            error('Email không hợp lệ.')
        }
    }
}
function passwordLength(password) {
    let check = true
    if (password.length < 6) {
        check = false
    }
    return check
}
async function checkUsers(email, password) {
    let check = false
    await fetch(url)
        .then(data => data.json())
        .then(data => {
            data.forEach(e => {
                if ((email === e.email) && (password === e.password)) {
                    check = true
                }
            })
        })
    if (check) {
        return 1
    } else {
        return 0
    }
}





let eyes = document.querySelector('form div i')
eyes.onclick = () => {
    if (eyes.className === 'fa-regular fa-eye') {
        eyes.className = 'fa-regular fa-eye-slash'
        eyes.parentElement.querySelector('input').type = 'text';
        
    }
    else if (eyes.className === 'fa-regular fa-eye-slash') {
        eyes.className = 'fa-regular fa-eye'
        eyes.parentElement.querySelector('input').type = 'password';
        
        
    }

}