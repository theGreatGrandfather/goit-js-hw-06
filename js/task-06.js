const field = document.querySelector('#validation-input');


const onFieldBlur = evt => {
    const str = evt.currentTarget.value;

    if (str.length === Number(field.dataset.length)) {
        field.classList.add("valid");
    } else {
        field.classList.add("invalid")
    }

};

field.addEventListener('blur', onFieldBlur);