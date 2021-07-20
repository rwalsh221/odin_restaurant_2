import { removeChild, buttonActive } from './utilities';

const aboutContent = () => {
  const htmlImage = `<div class="about__img--container tab-fade"><img src="img/briss_1.jpg" alt="picture of owner" class="about__img img__top"><img src="img/shop.jpg" alt="picture of shop" class="about__img img__bottom"></div>`;
  const htmlText = `<div class="about__text tab-fade"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque esse tenetur, architecto nulla in magnam dignissimos optio hic eveniet nesciunt ipsum ullam inventore ab laboriosam aspernatur! Beatae deleniti vel adipisci aperiam ex at? Possimus mollitia recusandae sequi magni expedita quia nemo culpa cum placeat nobis sint, eveniet ullam optio cupiditate ut. Eligendi doloremque rerum facilis quisquam a dolor similique veniam atque quod officia consectetur dignissimos ipsum veritatis, libero et maxime molestiae numquam vitae nemo rem? Esse ab possimus inventore! Eius velit, soluta assumenda non dicta labore fugit laudantium tempora aspernatur, officia asperiores blanditiis explicabo suscipit maiores quas nesciunt praesentium.</p></div>`;
  const contentGrid = document.querySelector('.content__grid');
  const content = document.querySelector('.content');

  removeChild(content);
  buttonActive('btn__about');

  contentGrid.style.display = 'grid';
  contentGrid.style.gridTemplateColumns = '35% 65%';
  contentGrid.style.gridTemplateRows = '100%';
  contentGrid.style.gridTemplateAreas = '"img content-text"';

  const screenWidth = window.matchMedia('(max-width: 414px)');
  if (screenWidth.matches) {
    contentGrid.style.gridTemplateColumns = '100%';
    contentGrid.style.gridTemplateRows = 'repeat(2, max-content)';
    contentGrid.style.gridTemplateAreas = '"img" "content-text"';
  }

  content.insertAdjacentHTML('beforeend', htmlImage);
  content.insertAdjacentHTML('beforeend', htmlText);
};

export default aboutContent;
