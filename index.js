const inputEmail = document.querySelector('.email-input')
const inputSubmit = document.querySelector('.submit-input')
const errorText = document.querySelector('.error-text')

const handleErrorMessage = () => {
    const email = inputEmail.value
    const isValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!isValid) {
        inputEmail.classList.add('error')
        errorText.classList.remove('hide')
    } else {
        inputEmail.classList.remove('error')
        errorText.classList.add('hide')
    }
}

inputSubmit.addEventListener('click', handleErrorMessage)