console.log('running...')
const forgotPassword = document.getElementById('forgot-password')
const formforgotPassword = document.getElementById('form-forgot-password')
const formSignin = document.getElementById('login-form')
const goBackToSignForm = document.getElementById('back-to-signin')
const confirmCodeForm = document.getElementById('confirm-code')
const changePasswordForm = document.getElementById('change-password-form')


forgotPassword.addEventListener('click', (event) => {
    event.preventDefault()
    formforgotPassword.style = 'display: block;'
    formSignin.style = 'display: none;'
    infoMessage.innerHTML = '';
})

goBackToSignForm.addEventListener('click', (event) => {
    event.preventDefault()
    formforgotPassword.style = 'display: none;'
    formSignin.style = 'display: block;'
    infoMessage.innerHTML = '';
})

formforgotPassword.addEventListener('submit', (event) => {
    event.preventDefault()
    const emailInput = document.getElementById('forgot-password-email-input').value.trim()

    if (emailInput == '') {
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Fill in your email address !'
        return;
    }

    const params = new URLSearchParams()
    params.append('email', emailInput)

    fetch('./includes/forgot_pwd/js_config.inc.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            infoMessage.classList.remove('text-danger')
            infoMessage.classList.add('text-success', 'p-2', 'text-center')
            infoMessage.innerHTML = data.success
            if (infoMessage.innerHTML === data.success || infoMessage.classList.contains('text-success') ) {
                formforgotPassword.style = 'display: none;'
                confirmCodeForm.style = 'display: block;'
            }
        } else {
            infoMessage.classList.remove('text-success')
            infoMessage.classList.add('text-danger', 'p-2', 'text-center')
            infoMessage.innerHTML = data.error
        }
    })
    .catch(error => {
        console.error(error);
    })
})

confirmCodeForm.addEventListener('submit', (event) => {
    const otpCode = document.getElementById('otp-code').value.trim()
    event.preventDefault()

    if (otpCode === '') {
        infoMessage.classList.remove('text-success')
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Fill in recieved code !';
        return
    }

    if(isNaN(otpCode)) {
        infoMessage.classList.remove('text-success')
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Code must be a number !';
        return
    }

    // REPLACE CODE WITH PHP OTP GENERATION

    if (otpCode == 123456) {
        infoMessage.classList.remove('text-danger')
        infoMessage.classList.add('text-success', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Code Matched Successfully !'
        if (infoMessage.classList.contains('text-success') || infoMessage.innerHTML == 'Code Matched Successfully !') {
            confirmCodeForm.style = 'display: none;'
            changePasswordForm.style = 'display: block;'
        }
    } else {
        infoMessage.classList.remove('text-success')
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Wrong code !';
        return
    }
})

changePasswordForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const password = document.getElementById('change-password').value
    const confirmPassword = document.getElementById('confirm-change-password').value

    if (password === '' || confirmPassword === '') {
        infoMessage.classList.remove('text-success')
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Fill in all fields !'
        return;
    }

    if (password !== confirmPassword) {
        infoMessage.classList.remove('text-success')
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = "Passwords don't match !"
        return;
    }

    if (password.length < 8) {
        infoMessage.classList.add('text-danger', 'text-center', 'p-2')
        infoMessage.innerHTML = `Password is too weak !`
        return;
    }

    const params = new URLSearchParams()
    params.append('password', password)

    fetch('./includes/forgot_pwd/js_config_change_pwd.inc.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            infoMessage.classList.remove('text-danger')
            infoMessage.classList.add('text-success', 'p-2', 'text-center')
            infoMessage.innerHTML = data.success
            if (infoMessage.innerHTML === data.success || infoMessage.classList.contains('text-success') ) {
                window.location.href = 'index.html'
            }
            console.log(infoMessage)
        } else {
            infoMessage.classList.add('text-danger', 'p-2', 'text-center')
            infoMessage.innerHTML = data.error
            console.log(infoMessage)
        }
    })
    .catch(error => {
        console.error('Error', error)
    })

})