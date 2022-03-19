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
            e.parentElement.querySelector('input').type = 'password';
            e.className = 'fa-regular fa-eye-slash'
        }
        else{
            e.parentElement.querySelector('input').type = 'text';
            e.className = 'fa-regular fa-eye'
        }
        
    }
})
