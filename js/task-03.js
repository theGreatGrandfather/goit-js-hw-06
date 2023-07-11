const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('.gallery');
 
const items = images.map(image => { 
  return `<li class="galleryItem"><img src="${image.url}" alt="${image.alt}" class="galleryImage"></li>`
}).join('');


 list.insertAdjacentHTML('beforeend', items);
 



// const ingredientsItems = images.map(image => {
//   const item = document.createElement('li');
//   const picture = document.createElement('img');
//   item.insertAdjacentHTML('afterbegin', picture);

//   picture.classList.add('img');
//   picture.src = image.url;
//   picture.alt = image.alt;
//   return item; 
  
// });


// list.append(...ingredientsItems);
