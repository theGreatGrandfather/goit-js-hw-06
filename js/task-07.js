const field = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${field.value}px`;

const onFieldChange = evt => {

    text.style.fontSize = `${evt.target.valueAsNumber}px`;
};

field.addEventListener('input', onFieldChange);