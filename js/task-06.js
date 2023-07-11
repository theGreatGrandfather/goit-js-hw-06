const field = document.querySelector('#validation-input');
 
const onFieldBlur = evt => {
    if (evt.currentTarget.value.length === Number(field.dataset.length)) {
        field.classList.remove("invalid");
        field.classList.add("valid");
    } else {
        field.classList.add("invalid");
        field.classList.remove("valid");
    }
};


field.addEventListener('blur', onFieldBlur);