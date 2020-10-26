import homeContent from './home.js'
import aboutContent from './about.js'
import contactContent from './contact.js'
import {menuSkeleton, sausage, pPudding, rSteak, sRib, bPork, legLamb, chicken, special} from './menu.js'
import {mouseOver, mouseOut} from './utilities.js'

console.log('HELLO ITS WORKING')

const init = (function () {
   homeContent()
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
   console.log(document.getElementById('menu-list').childElementCount)
   
   // Sets eventlistner for photo gallery animation
   for(let i = 1; i <= document.getElementById('menu-list').childElementCount; i++) {

      document.getElementById(`hover-${i}`).addEventListener("mouseover", function(event){
         mouseOver(event)
      });
      document.getElementById(`hover-${i}`).addEventListener("mouseout", function(event) {
         mouseOut(event)
      });
      console.log(i)
   }
})

document.getElementById('btn__contact').addEventListener('click', contactContent)


