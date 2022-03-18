let login = document.querySelector('#login-submit')
let result = document.querySelector('.result')




login.onclick = (e)=>{
    e.preventDefault();
    result.classList.toggle('result-active')
}
let eyes = document.querySelector('form div i')
eyes.onclick = ()=>{
    if(eyes.className == 'fa-regular fa-eye'){
        eyes.parentElement.querySelector('input').type = 'password';
        eyes.className = 'fa-regular fa-eye-slash'
    }
    else if(eyes.className = 'fa-regular fa-eye-slash'){
        eyes.parentElement.querySelector('input').type = 'text';
        eyes.className = 'fa-regular fa-eye'
    }
    
}