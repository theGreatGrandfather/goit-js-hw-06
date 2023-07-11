const userName = document.querySelector('#name-output');
const userNameField = document.querySelector('#name-input');

const onUserNameFieldChange = (evt) => {
    evt.currentTarget.value ?
        userName.innerHTML = evt.currentTarget.value :
        userName.innerHTML = "Anonymous";
}

userNameField.addEventListener("input", onUserNameFieldChange)