let eyes = document.querySelectorAll('.register-input div i')

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
