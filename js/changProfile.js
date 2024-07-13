console.log('running...')

document.addEventListener('DOMContentLoaded', () => {
    var insertProfileImg = document.getElementById('insert-profile-img')
    var changeUsernameBtn = document.getElementById('change-username-btn')
    var changeEmailBtn = document.getElementById('change-email-btn')
    var changePwdBtn = document.getElementById('change-pwd-btn')
    var overlay = document.getElementById('overlay')


    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var inputData = document.querySelector('.input-data')
    var inputTitle = document.getElementById('input-title')
    var inputField = document.getElementById('inputField')

    insertProfileImg.addEventListener('click', ()=> {
        inputTitle.textContent = 'profile picture'
        inputData.innerHTML = `<input type="file" accept="image/*" class="my-2 py-2 mb-2" id="fileInput" name="profilePicture" ">`
        overlay.style.display = 'block'
    })


    changeUsernameBtn.addEventListener('click', ()=> {
        inputData.innerHTML = `<input type="text" id="inputField" class="form-control mb-2" placeholder="Enter new username">`
        inputTitle.textContent = 'username'
        overlay.style.display = 'block'
    })

    changeEmailBtn.addEventListener('click', ()=> {
        inputData.innerHTML = `<input type="text" id="inputField" class="form-control mb-2" placeholder="Enter new email">`
        inputTitle.textContent = 'email address'
        overlay.style.display = 'block'
    })

    changePwdBtn.addEventListener('click', ()=> {
        inputData.innerHTML = `<input type="text" id="inputField" class="form-control mb-2" placeholder="Enter new password">`
        inputTitle.textContent = 'password'
        overlay.style.display = 'block'
    })

    confirmBtn.addEventListener('click', ()=> {
        overlay.style.display = 'none';
    });

    cancelBtn.addEventListener('click', ()=> {
        overlay.style.display = 'none';
    });

})
