import {removeChild, buttonActive} from './utilities'



const homeContent = () => {
    const contentGrid = document.querySelector('.content__grid');
    const htmlHeading = `<h2 class="heading__secondary home__heading" id="hover">WELCOME!</h2>`;
    const htmlImage = `<img src="img/hillary_welcome.jpg" alt="Picture of the owner" class="home__img tab-fade">`
    const htmlText = `<div class="home__text tab-fade">It's like I always say. I'm a business man</div> --></img>`
    const content = document.querySelector('.content')


    

    removeChild()
    
    buttonActive()

    contentGrid.style.display="flex"
    contentGrid.style.flexDirection="column"

    content.insertAdjacentHTML('beforeend', htmlHeading);
    content.insertAdjacentHTML('beforeend', htmlImage);
    content.insertAdjacentHTML('beforeend', htmlText);
    
    
    
    
}



export default homeContent;