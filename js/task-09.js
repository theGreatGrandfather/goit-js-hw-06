function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const bgcTitle = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

const onColorBtnClick = (evt) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
  bgcTitle.innerHTML = `${color}`;
};

colorBtn.addEventListener("click", onColorBtnClick);