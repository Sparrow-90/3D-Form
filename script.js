const signUpBtn = document.querySelector('.signup-btn')
const signInBtn = document.querySelector('.signin-btn')
const formsWrapper = document.querySelector('.forms-wrapper')

signUpBtn.addEventListener('mousedown', (e)=>{
    e.preventDefault()
    formsWrapper.classList.add('change')
})
signInBtn.addEventListener('mousedown', (e)=>{
    e.preventDefault()
    formsWrapper.classList.remove('change')
})