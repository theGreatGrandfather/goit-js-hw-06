const list = document.querySelector('#categories');
const numberOfCategories = list.children.length;
console.log('Number of categories: ', numberOfCategories);

const items = document.querySelectorAll('.item');

items.forEach(function(item) {
    console.log('Category: ', item.children[0].innerHTML);
    console.log('Elements: ', item.children[1].children.length);
});