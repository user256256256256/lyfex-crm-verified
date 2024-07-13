console.log('running...')

const form = document.getElementById('login-form')
const infoMessage = document.getElementById('info-message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.getElementById('floatingEmail').value
    const password = document.getElementById('floatingPassword').value

    if (email === '' || password === '') {
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Fill in all field !'
        return;
    } 

    if (password.length < 8) {
        infoMessage.classList.add('text-danger', 'p-2', 'text-center')
        infoMessage.innerHTML = 'Wrong Password !'
        return;
    }

    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)

    fetch('./includes/signin/js_config.inc.php', {
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