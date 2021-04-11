import campfire from '../assets/images/icons8-campfire-100.png';
import expedition from '../assets/images/icons8-expedition-backpack-100.png';
import spinnerLure from '../assets/images/icons8-spinner-lure-100.png';

  const category = `
    <section class="categories">
    <div class="category">

      <div class="rank">
        <div class="rank__start"></div>
        <span>4.9</span>
      </div>

      <figure class="image__container">
        <img class="image--filter" src="${expedition}" alt="">
      </figure>
      <h2 class="title">Hicking trips</h2>
      <p class="paragraph">Activities</p>
      </div>

      <div class="category">

      <div class="rank">
        <div class="rank__start"></div>
        <span>4.9</span>
      </div>

      <figure class="image__container">
        <img class="image--filter" src="${spinnerLure}" alt="">
      </figure>
      <h2 class="title">Fishing</h2>
      <p class="paragraph">Activities</p>
      </div>

      <div class="category">

      <div class="rank">
        <div class="rank__start"></div>
        <span>4.9</span>
      </div>

      <figure class="image__container">
        <img class="image--filter" src="${campfire}" alt="">
      </figure>
      <h2 class="title">Camping</h2>
      <p class="paragraph">Activities</p>
    </div>
  </section>
  `;

export default category;
