
const list = document.querySelectorAll('li.item');

console.log(`Number of categories: ${list.length}`);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {

  console.log(`Category: ${el.firstElementChild.textContent}`);
   console.log(`Elements: ${el.lastElementChild.children.length}`);
});