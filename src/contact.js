import { removeChild, buttonActive } from './utilities';
import displayMap from './map.js';

const contactContent = () => {
  const htmlMap = `<section class="map-container tab-fade"><div class="map" id='map'></div></section>`;
  const htmlContact = `<div class="contact tab-fade"><h3 class="contact__heading heading__tertiary">COME AND HAVE A BUTCHERS!</h3><ul class="contact__address"><li>H. BRISS & SON</li><li>86 Station RD</li><li>Royston Vasey</li><li>England</li><li>01457 555555</li></ul></div>`;
  const htmlImage = `<img src="./img/Royston.jpg" alt="Welcome to royston vasey" class="contact__img tab-fade">`;
  const contentGrid = document.querySelector('.content__grid');
  const content = document.querySelector('.content');

  removeChild(content);

  buttonActive('btn__contact');

  contentGrid.style.display = 'grid';
  contentGrid.style.gridTemplateColumns = '50% 50%';
  contentGrid.style.gridTemplateRows = '50% 50%';
  contentGrid.style.gridTemplateAreas =
    '"contact-address contact-image" "contact-map contact-map"';

  content.insertAdjacentHTML('beforeend', htmlMap);
  content.insertAdjacentHTML('beforeend', htmlContact);
  content.insertAdjacentHTML('beforeend', htmlImage);

  displayMap();
};

export default contactContent;
