let counterValue = 0;
const value = document.querySelector('#value');
value.innerHTML = counterValue;

const counter = document.querySelector('#counter');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');


const onCounterBtnClick = (evt) => {
    if (evt.target === incrementBtn) {
        counterValue += 1;
    } else if (evt.target === decrementBtn) {
        counterValue -= 1;
    }

    return value.innerHTML = counterValue;
};

counter.addEventListener('click', onCounterBtnClick);