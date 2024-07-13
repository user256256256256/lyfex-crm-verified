console.log('running...')

const form = document.getElementById('signup-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = document.getElementById('floatingName').value.trim()
    const email = document.getElementById('floatingEmail').value.trim()
    const password = document.getElementById('floatingPassword').value
    const confirmPassword = document.getElementById('floatingConfirmPassword').value
    const infoMessage = document.getElementById('info-message')

    if (username == '' || email == '' || password == '' || confirmPassword == '') {
        infoMessage.classList.add('text-danger', 'text-center', 'p-2')
        infoMessage.innerHTML = `Fill in all fields !`
        return;
    }

    if (password !== confirmPassword) {
        infoMessage.classList.add('text-danger', 'text-center', 'p-2')
        infoMessage.innerHTML = `Passwords Don't Match !`
        return;
    }

    if (password.length < 8) {
        infoMessage.classList.add('text-danger', 'text-center', 'p-2')
        infoMessage.innerHTML = `Password is too weak !`
        return;
    }

    const params = new URLSearchParams()
    params.append('username', username)
    params.append('email', email)
    params.append('password', password)

    // SEND INPUTS TO PHP
    fetch('./includes/singnup/js_config.inc.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
    })
    .then(response => response.json())
    .then(data => {
        console.log(true)
        if (data.success) {
            infoMessage.classList.remove('text-danger')
            infoMessage.classList.add('text-success', 'text-center', 'p-2')
            infoMessage.innerHTML = data.success
            if (infoMessage.innerHTML = data.success || infoMessage.classList.contains('text-success')) {
                window.location.href = 'index.html'
            }
            console.log(infoMessage)
        } else {
            infoMessage.classList.add('text-danger', 'text-center', 'p-2')
            infoMessage.innerHTML = data.error
            console.log(infoMessage)
        }
    })
    .catch (error => {
        console.error('Error:', error)
    })

})


