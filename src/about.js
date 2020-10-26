import {removeChild, buttonActive} from './utilities'


const aboutContent = () => {
    const htmlImage = `<div class="about__img tab-fade"><img src="img/briss_1.jpg" alt="picture of owner" class="content__img img__top"><img src="img/shop.jpg" alt="picture of shop" class="content__img img__bottom"></div>`
    const htmlText = `<div class="content__text tab-fade"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque esse tenetur, architecto nulla in magnam dignissimos optio hic eveniet nesciunt ipsum ullam inventore ab laboriosam aspernatur! Beatae deleniti vel adipisci aperiam ex at? Possimus mollitia recusandae sequi magni expedita quia nemo culpa cum placeat nobis sint, eveniet ullam optio cupiditate ut. Eligendi doloremque rerum facilis quisquam a dolor similique veniam atque quod officia consectetur dignissimos ipsum veritatis, libero et maxime molestiae numquam vitae nemo rem? Esse ab possimus inventore! Eius velit, soluta assumenda non dicta labore fugit laudantium tempora aspernatur, officia asperiores blanditiis explicabo suscipit maiores quas nesciunt praesentium.</p></div>`
    const contentGrid = document.querySelector('.content__grid');
    const content = document.querySelector('.content');
    const button = document.getElementById('btn__about');

    removeChild();
    buttonActive('btn__about')

    contentGrid.style.display="grid"
    contentGrid.style.gridTemplateColumns="35% 65%"
    contentGrid.style.gridTemplateRows="max-content 100%"
    contentGrid.style.gridTemplateAreas='"nav-bar nav-bar" "img content-text"'
    
    content.insertAdjacentHTML('beforeend', htmlImage)
    content.insertAdjacentHTML('beforeend', htmlText)
};

export default aboutContent;

