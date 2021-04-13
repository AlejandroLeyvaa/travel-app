import TravelApi from './TravelApi';
import modal from './modal';
import closeModal from './closeModal';
import state from './state';

const travelApi = new TravelApi();

export let listOfSchedules = [];

function sendData() {
  const form = document.getElementById('form');
  let data = {};

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const scheduleRoute = document.getElementById('schedule-route');
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests');
    const guestsValue = guests.value;
    scheduleRoute.style.display = 'block';

    data = {
      country,
      date,
      guests: guestsValue,
    };

    if (country !== '' && date !== '' && guestsValue !== '') {
      // travelApi.create(data)
      // .then((response) => {
      //   modal(response.message);
      //   closeModal();
      // });

      listOfSchedules.push(data);
      modal(
        `Su viaje ha sido agendado para la fecha ${date}, en ${data.country} y con ${data.guests} huespedes`
        );
          closeModal();
    } else {
      const redColor = '#d9162c';
      modal('Fill all fields', redColor);
      closeModal();
    }
  });

  return data;
}

export default sendData;
