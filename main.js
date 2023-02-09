const inputs = document.querySelectorAll('.box input')
const btn = document.getElementById('btn')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const firstnameError = document.getElementById('firstname-error')
const form = document.getElementById('form')
const validName = /^[A-Za-z]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(firstName.value.trim() === ''){
        firstnameError.innerHTML = 'Firstname is required'
        return false;
    }
    if(!validName.test(firstName.value.trim())){
        firstnameError.innerHTML = "Not a valid first name"
        return false
    }
    else{
        firstnameError.innerHTML = ''
        return true
    }
})

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

