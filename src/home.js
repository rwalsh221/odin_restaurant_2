import removeChild from './utilities'

const homeContent = () => {
    const contentGrid = document.querySelector('.content__grid');
    const htmlHeading = `<h2 class="heading__secondary home__heading">WELCOME!</h2>`;
    const htmlImage = `<img src="img/hillary_welcome.jpg" alt="Picture of the owner" class="home__img">`
    const htmlText = `<div class="home__text">It's like I always say. I'm a business man</div> --></img>`
    const selector = document.querySelector('.content')

    if (selector.hasChildNodes) removeChild()
    

    contentGrid.style.display="flex"
    contentGrid.style.flexDirection="column"

    document.querySelector('.content').insertAdjacentHTML('beforeend', htmlHeading);
    document.querySelector('.content').insertAdjacentHTML('beforeend', htmlImage);
    document.querySelector('.content').insertAdjacentHTML('beforeend', htmlText);
    
    
}

export default homeContent;