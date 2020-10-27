import {removeChild} from './utilities'

// (name of reviewer, image of reviewer, review content. all strings)
const reviewFactory = (customerName, customerImage, review) => {
    return { customerName, customerImage, review, }
};

const reviewRender = () => {
    let randomNumber, i;
    let randomNumberArr = [];
    let renderReviewArr = []
    
    //Removes reviews from html
    const rContainer = document.querySelector('.review__container');
    removeChild(rContainer);
    
    // loops until random number array contains three different numbers and puts review into render review array from position of random number
    for(i = 1; i <= 100; i++) {
        randomNumber = Math.floor(Math.random() * reviewArr.length)
        
        if (randomNumberArr.indexOf(randomNumber) === -1) {
            renderReviewArr.push(reviewArr[randomNumber])
            randomNumberArr.push(randomNumber)
        } 

        if (randomNumberArr.length === 3) {
            break
        }
    }
    
    // generates html based on render review array
    for(i = 0; i <= 2; i++) {
        const customerHtml = `<li class="review__customer"><img src="${renderReviewArr[i].customerImage}" alt="picture of a customer" class="review__img"><span class="review__name">${renderReviewArr[i].customerName}</span></li>`

        const reviewContentHtml = `<li class="review__content">${renderReviewArr[i].review}</li>`

        const reviewHtml = `<ul class="review">${customerHtml}${reviewContentHtml}</ul>`
        
        document.querySelector('.review__container').insertAdjacentHTML("beforeend", reviewHtml);
    } 
}



const pLazerou = reviewFactory('Papa Lazerou', 'img/cust_papa_lazarou.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua')
const pCampbellJones = reviewFactory('Pauline Campbell-jones', 'img/cust_pauline.png', 'Id neque aliquam vestibulum morbi');
const gTipps = reviewFactory('Geoff Tipps', 'img/cust_geoff.jpg', 'Nulla aliquet porttitor lacus luctus accumsan tortor posuere');
const mChinnery = reviewFactory('Matthew Chinnery', 'img/cust_chinnery.jpeg', 'Tincidunt eget nullam non nisi. Viverra tellus in hac habitasse platea dictumst vestibulum')
const mMichaels = reviewFactory('Mickey Michaels', 'img/cust_micky.jpeg', 'Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam')
const bWoodall = reviewFactory('Rev. Bernice Woodall', 'img/cust_woodall.jpeg', 'Eget sit amet tellus cras adipiscing enim eu turpis egestas.')
const lMcqueen = reviewFactory('Les Mcqueen', 'img/cust_mcqueen.jpeg', 'It\'s a shit business');
const jLevinson = reviewFactory('Judee Levinson', 'img/cust_levinson.jpeg', 'Nullam vehicula ipsum a arcu. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec.');
const iKrell = reviewFactory('Iris Krell', 'img/cust_krell.jpeg', 'Nulla facilisi cras fermentum odio eu feugiat.')

const reviewArr = [pLazerou, pCampbellJones, gTipps, mChinnery, mMichaels, lMcqueen, bWoodall, jLevinson, iKrell]

export {reviewRender}
