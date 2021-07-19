import { removeChild, buttonActive } from './utilities';

//Sets initial html for menu page
const menuSkeleton = () => {
  const contentGrid = document.querySelector('.content__grid');

  const content = document.querySelector('.content');

  const menuImageHtml = `<div class="menu__img tab-fade"></div>`;

  const menuContentHtml = `<div class="menu__content tab-fade"><div class="menu__heading"><h3 class="heading__tertiary menu__heading--main">MENU</h3><h4 class="menu__heading--secondary">All our products are locally sourced</h4></div><div class="menu__list"><ul class="menu__list--item" id="menu-list"></ul><ul class="menu__list--price"></ul></div></div>`;

  removeChild(content);

  buttonActive('btn__menu');

  contentGrid.removeAttribute('style');

  contentGrid.style.display = 'flex';

  const screenWidth = window.matchMedia('(max-width: 414px)');
  if (screenWidth.matches) {
    console.log('MATCH');
    contentGrid.style.flexDirection = 'column';
  }

  content.insertAdjacentHTML('beforeend', menuImageHtml);
  content.insertAdjacentHTML('beforeend', menuContentHtml);
};

// (id to match image for animation, name of product, price of product, kilogram true or false, image src)
const menuFactory = (id, name, price, kiloGram, imageSrc) => {
  const imageHtml = `<div class="menu__img--${id} menu__img--ovflow"><img src="${imageSrc}" alt="Image of ${name}" class="img__size" id="menu__img--${id}"></div>`;

  const menuItemHtml = `<li class="menu__item" id="hover-${id}">${name}</li>`;

  let menuPriceHtml = ``;

  if (kiloGram === true) {
    menuPriceHtml = `<li class="menu__price">£${price} / KG</li>`;
  } else {
    menuPriceHtml = `<li class="menu__price">£${price}</li>`;
  }

  const render = () => {
    document
      .querySelector('.menu__img')
      .insertAdjacentHTML('beforeend', imageHtml);
    document
      .querySelector('.menu__list--item')
      .insertAdjacentHTML('beforeend', menuItemHtml);
    document
      .querySelector('.menu__list--price')
      .insertAdjacentHTML('beforeend', menuPriceHtml);
  };

  return { render };
};

const sausage = menuFactory(
  1,
  "Directors Sausage's",
  '3.40 / 6',
  false,
  './img/dir_sausage.jpg'
);
const pPudding = menuFactory(
  2,
  'Pease Pudding',
  '3.50',
  false,
  './img/pease-pudding-photo.jpeg'
);
const rSteak = menuFactory(
  3,
  'Rump Steak',
  '14.99',
  true,
  './img/rump_steak.jpg'
);
const sRib = menuFactory(4, 'Spare Ribs', '6.33', true, './img/spare_ribs.jpg');
const bPork = menuFactory(
  5,
  'Blade Pork',
  '5.99',
  true,
  './img/blade_pork.jpg'
);
const legLamb = menuFactory(
  6,
  'Leg of Lamb',
  '8.99',
  true,
  './img/leg_lamb.jpg'
);
const chicken = menuFactory(7, 'Chicken', '4.17', true, './img/chicken.jpg');
const special = menuFactory(
  8,
  'Special Stuff',
  '32.40',
  true,
  './img/special.jpg'
);

export {
  menuSkeleton,
  sausage,
  pPudding,
  rSteak,
  sRib,
  bPork,
  legLamb,
  chicken,
  special,
};
