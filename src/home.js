import { removeChild, buttonActive } from './utilities';

const homeContent = () => {
  const contentGrid = document.querySelector('.content__grid');
  const htmlHeading = `<h2 class="home__heading heading__secondary" id="hover">WELCOME!</h2>`;
  const htmlImage = `<img src="img/hillary_welcome.jpg" alt="Picture of the owner" class="home__img tab-fade"></img>`;
  const htmlText = `<div class="home__text tab-fade">It's like I always say. I'm a business man</div>`;
  const content = document.querySelector('.content');

  removeChild(content);

  buttonActive();

  contentGrid.style.display = 'flex';
  contentGrid.style.flexDirection = 'column';

  content.insertAdjacentHTML('beforeend', htmlHeading);
  content.insertAdjacentHTML('beforeend', htmlImage);
  content.insertAdjacentHTML('beforeend', htmlText);
};

export default homeContent;
