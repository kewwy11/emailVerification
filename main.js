const inputs = document.querySelectorAll('.box input')
const btn = document.getElementById('btn')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const firstnameError = document.getElementById('firstname-error')
const lastnameError = document.getElementById('lastname-error')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')
const form = document.getElementById('form')
const validName = /^[A-Za-z]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validatefirstName()
    validateLastName()
    validateEmail()
    validatePassword()

})

function validatefirstName(){
    if(firstName.value.trim() === ''){
        firstnameError.innerHTML = 'Firstname is required'
        return false;
    }
    if(!validName.test(firstName.value.trim())){
        firstnameError.innerHTML = "Not a valid first name"
        return false
    }
    if(firstnameError.innerHTML = ''){
        return true
    }

}

function validateLastName(){
    if(lastName.value.trim() === ''){
        lastnameError.innerHTML = 'Lastname is required'
        return false;
    }
    if(!validName.test(lastName.value.trim())){
        lastnameError.innerHTML = "Not a valid last name"
        return false
    }
    if(lastnameError.innerHTML = ''){
        return true
    }
}

function validatePassword(){
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password.value.trim() === ''){
        passwordError.innerHTML = 'Password is required'
        return false;
    }

    if(!validPassword.test(password.value.trim())){
        passwordError.innerHTML = 'Password must include A, a and #'
        return false;
    }
    else{
        passwordError.innerHTML = ''
        return true
    }
}

function validateEmail(){
    const validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.trim() === ''){
        emailError.innerHTML = 'Email Address is required'
        return false;
    }

    if(!validEmailAddress.test(email.value.trim())){
        emailError.innerHTML = 'Not a valid email address'
        return false;
    }
    else{
        emailError.innerHTML = ''
        return true
    }
}

inputs.forEach(input => {
    input.addEventListener('click', () => {
        removeInput();
        input.classList.add('active')
    })
})

function removeInput(){
    inputs.forEach(input => {
            input.classList.remove('active')
        })
}

// btn.addEventListener('click', validateFirstName)

// function validateFirstName(){
//     firstName.value = ''

//     if(firstName.length === ''){
//         firstnameError.innerHTML = 'Firstname is required'
//         return false;
//     }

//     // if(!firstName.match(/^[A-Za-z]+$/)){
//     //     firstnameError.innerHTML = 'Write a correct name'
//     //     return false;
//     // }

//     return true;
// }

