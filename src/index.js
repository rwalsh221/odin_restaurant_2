import homeContent from './home.js';
import aboutContent from './about.js';
import contactContent from './contact.js';
import {
  menuSkeleton,
  sausage,
  pPudding,
  rSteak,
  sRib,
  bPork,
  legLamb,
  chicken,
  special,
} from './menu.js';
import { mouseOver, mouseOut } from './utilities.js';
import { reviewRender } from './review.js';

const init = (function () {
  homeContent();
  reviewRender();
})();

document.getElementById('btn__about').addEventListener('click', function () {
  reviewRender();
  aboutContent();
});

document.getElementById('btn__home').addEventListener('click', function () {
  reviewRender();
  homeContent();
});

document.getElementById('btn__menu').addEventListener('click', function () {
  reviewRender();

  menuSkeleton();

  sausage.render();
  pPudding.render();
  rSteak.render();
  sRib.render();
  bPork.render();
  legLamb.render();
  chicken.render();
  special.render();

  // Sets eventlistner for photo gallery animation
  for (
    let i = 1;
    i <= document.getElementById('menu-list').childElementCount;
    i++
  ) {
    document
      .getElementById(`hover-${i}`)
      .addEventListener('mouseover', function (event) {
        mouseOver(event);
      });
    document
      .getElementById(`hover-${i}`)
      .addEventListener('mouseout', function (event) {
        mouseOut(event);
      });
  }
});

document.getElementById('btn__contact').addEventListener('click', function () {
  reviewRender();
  contactContent();
});
