import TravelApi from './TravelApi';
import modal from './modal';
import closeModal from './closeModal';

const travelApi = new TravelApi();
function sendData() {
  const form = document.getElementById('form');
  let data = {};

  const date = document.getElementById('date');

  // date.addEventListener('input', (e) => {
  //   console.log(e.target);
  //   console.log(e.target.valueAsDate);
  // })
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests');
    const guestsValue = guests.value;

    console.log(date);

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
      modal(
        `Su viaje ha sido agendado para la fecha ${date}, en ${data.country} y con ${data.guests} huespedes`
        );
          closeModal();
    } else {
      const redColor = '#d9162c';
      modal('Fill all fields', redColor);
      closeModal();
    }
    // console.log(data);
  });

  return data;
}

export default sendData;
