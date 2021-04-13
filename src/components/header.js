import lake from '../assets/images/lake.jpg';

const header = `
<figure class="hero">
<img src="${lake}" alt="">
</figure>
<div class="date" id="date-container">
<h2 class="title">The journey starts now!</h2>
<button class="button" id="start">Start journey</button>
<form class="form" id="form">
  <div class="close" id="close">
    <div class="circle">
      <div class="rec"></div>
      <div class="rec"></div>
    </div>
  </div>
  <label for="country">
    <p class="paragraph">Location</p>
    <select id="country">
      <option value="Mexico">México</option>
      <option value="United States">United States</option>
    </select>
  </label>
  <label for="date">
    <p class="paragraph">Date</p>
    <input type="date" id='date' name='date' min="2021-04-1" max="2050-08-26">
  </label>
  <label for="guests">
    <p class="paragraph">Guests</p>
    <input type="number" id='guests' name='guests' value="1" min="1" max="10">
  </label>
  <button class="button" id="send">Send</button>
</form>
</div>
`;

export default header;
