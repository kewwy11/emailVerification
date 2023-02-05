const inputs = document.querySelectorAll('.box input')
const btn = document.getElementById('btn')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

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
