const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  return element; 
  
});

list.append( ...ingredientsItems);
