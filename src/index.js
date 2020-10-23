import homeContent from './home.js'
import aboutContent from './about.js'
import contactContent from './contact.js'
import {menuSkeleton, sausage, pPudding, rSteak, sRib, bPork, legLamb, chicken, special} from './menu.js'
// import renderMenu from './menu.js'

console.log('HELLO ITS WORKING')

const init = (function () {
   homeContent()
   // renderMenu();
})();


document.getElementById('btn__about').addEventListener('click', aboutContent)
document.getElementById('btn__home').addEventListener('click', homeContent)
document.getElementById('btn__menu').addEventListener('click', function() {
   menuSkeleton();
   sausage.render();
   pPudding.render();
   rSteak.render();
   sRib.render();
   bPork.render();
   legLamb.render();
   chicken.render();
   special.render();

})
document.getElementById('btn__contact').addEventListener('click', contactContent)

