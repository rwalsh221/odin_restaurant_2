// remove html from .content on tab change
const removeChild = (selector) => {
  // const content = document.querySelector('.content')

  if (selector.hasChildNodes) {
    while (selector.firstChild) {
      selector.removeChild(selector.lastChild);
    }
  }
};

// Changes button styles on press
const buttonActive = (btn) => {
  const button = document.getElementById(btn);

  if (btn === 'btn__about') {
    document.getElementById('btn__menu').classList.remove('btn__active');
    document.getElementById('btn__contact').classList.remove('btn__active');
  } else if (btn === 'btn__menu') {
    document.getElementById('btn__about').classList.remove('btn__active');
    document.getElementById('btn__contact').classList.remove('btn__active');
  } else if (btn === 'btn__contact') {
    document.getElementById('btn__about').classList.remove('btn__active');
    document.getElementById('btn__menu').classList.remove('btn__active');
  } else {
    document.getElementById('btn__about').classList.remove('btn__active');
    document.getElementById('btn__menu').classList.remove('btn__active');
    document.getElementById('btn__contact').classList.remove('btn__active');
  }

  if (btn) button.classList.add('btn__active');
};

// Functions for menu photogrid animation
const mouseOver = (e) => {
  const selector = e.target.id.split('-');

  document
    .getElementById(`menu__img--${selector[1]}`)
    .classList.add('menu__img--zoom');
};

const mouseOut = (e) => {
  const selector = e.target.id.split('-');

  document
    .getElementById(`menu__img--${selector[1]}`)
    .classList.remove('menu__img--zoom');
};

export { removeChild, buttonActive, mouseOver, mouseOut };
