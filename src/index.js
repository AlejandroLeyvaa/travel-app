import categories from './components/categories';
import header from './components/header';
import tours from './components/tours';
import sendData, { listOfSchedules } from './utils/sendData';
import './styles/styles.css';
import './styles/tablet.css';
import './styles/desktop.css';
import schedulesComponent from './components/schedules';

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

insertComponentIn('#root', 'header', header, 'header');

function home() {
  insertComponentIn('#root', 'main', categories, 'main').then(() => {
    return insertComponentIn('.main', 'section', tours, 'tours');
  });
}

function schedules() {
  if (listOfSchedules.length > 0) {
    insertComponentIn('#root', 'main', schedulesComponent, 'schedules').then(
      () => {
        const container = document.getElementById('schedule-container');
        listOfSchedules.map((item) => {
          const createArticle = document.createElement('article');
          const template = `
      <div>
        <h2 class="title">
          ${item.country}
        </h2>
        <h2 class="title">
          ${item.date}
        </h2>
        <h2 class="title">
          ${item.guests}
        </h2>
      </div>
      `;
          createArticle.innerHTML = template;
          container.appendChild(createArticle);
        });
      }
    );
  } else {
    insertComponentIn('#root', 'main', schedulesComponent, 'schedules');
  }
}

window.addEventListener('load', () => {
  console.log(listOfSchedules.length);
  if (location.hash === '') {
    if(listOfSchedules.length === 0) {
      const scheduleRoute = document.getElementById('schedule-route');
      scheduleRoute.style.display = 'none';
    }
    home();
  }

  if (location.hash === '#/schedule') {
    schedules();
  }
});

window.addEventListener('hashchange', () => {
  if(listOfSchedules.length === 0) {
    const scheduleRoute = document.getElementById('schedule-route');
    scheduleRoute.style.display = 'none';
  }
  const root = document.getElementById('root');
  const main = document.querySelector('.main');
  if (location.hash === '#/schedule') {
    console.log('______');
    console.log(main);
    main.remove();
    schedules();
  } else if (location.pathname === '/') {
    home();
    root.querySelector('.schedules').remove();
  }
  // listOfSchedules();
});

sendData();

document.getElementById('date-container').addEventListener('click', (e) => {
  const element = e.target;
  const form = document.getElementById('form');

  if (element.id === 'start') {
    element.nextElementSibling.style.display = 'block';
  }

  if (e.target.className === 'circle' || e.target.className === 'rec') {
    form.style.display = 'none';
  }
});
