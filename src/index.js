import categories from './components/categories';
import header from './components/header';
import tours from './components/tours';
import sendData from './utils/sendData';
import './styles/styles.css';
import './styles/tablet.css';
import './styles/desktop.css';

async function insertComponentIn(
  where,
  createElement,
  component,
  classNameElement
) {
  const selectedElement = document.querySelector(where);
  const element = document.createElement(createElement);
  element.className = classNameElement;
  element.innerHTML = component;
  return await selectedElement.appendChild(element);
}

function render() {
  insertComponentIn('#root', 'header', header, 'header');
  insertComponentIn('#root', 'main', categories, 'main').then(() => {
    return insertComponentIn('.main', 'section', tours, 'tours');
  });
}

window.addEventListener('load', render());

sendData();

document.getElementById('date').addEventListener('click', (e) => {
  const element = e.target;
  const form = document.getElementById('form');


  if (element.id === 'start') {
    element.nextElementSibling.style.display = 'block';
  }

  if (
    e.target.className === 'circle' ||
    e.target.className === 'rec'
    ) {
    form.style.display = 'none';
  }
});
