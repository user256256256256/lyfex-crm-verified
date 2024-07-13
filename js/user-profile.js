console.log('running...')

const username = document.querySelectorAll('.username')
const useremail = document.querySelector('.useremail')

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    fetch('./includes/user-profile/js_config.inc.php', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            username.forEach(element => {
                element.textContent = data.username
            });
            useremail.textContent = data.email
        }
    })
    .catch (error => {
        console.error('Error:', error)
    })
})
