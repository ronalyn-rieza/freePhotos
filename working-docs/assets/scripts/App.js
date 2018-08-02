import {elements} from './views/base';

//menu bar toggler for primary nav on medium size screen
const mMenuBar = elements.mediumMenuBar;

if(mMenuBar){
  mMenuBar.addEventListener('click', mIcon =>{

    const el = mIcon.target.closest('.nav__menu-icon--show-medium');
    //check if nav menu icon has menu-icon--close-x
    const iconClose = el.classList.contains('nav__menu-icon--close-x');

    if(iconClose){
      //if its true remove the class
      el.classList.remove('nav__menu-icon--close-x');
    }else{
      //if its false add the class
      el.classList.add('nav__menu-icon--close-x');
    }
    //selecting div with class of nav__primary--content
    const content = el.parentElement.querySelector('.nav__primary--content');
    //checking if it has class of nav__primary--content--is-visible
    const contentVisible = content.classList.contains('nav__primary--content--is-visible');

    if(contentVisible){
      //if its true remove the class
      content.classList.remove('nav__primary--content--is-visible');
    }else{
      //if its false add the class
      content.classList.add('nav__primary--content--is-visible');
    }
  });
}

//menu bar toggler for secondary nav on small size screen
const sMenuBar = elements.smallMenuBar;

if(sMenuBar){
  sMenuBar.addEventListener('click', sIcon =>{

    const el = sIcon.target.closest('.nav__menu-icon--show-small');

    //check if nav menu icon has menu-icon--close-x
    const iconClose = el.classList.contains('nav__menu-icon--close-x');

    if(iconClose){
      //if its true remove the class
      el.classList.remove('nav__menu-icon--close-x');
    }else{
      //if its false add the cl
      el.classList.add('nav__menu-icon--close-x');
    }
    //selecting div with class of nav__primary--content
    const content = el.parentElement.querySelector('.nav__secondary--content');
    //checking if it has class of nav__primary--content--is-visible
    const contentVisible = content.classList.contains('nav__secondary--content--is-visible');

    if(contentVisible){
      //if its true remove the class
      content.classList.remove('nav__secondary--content--is-visible');
    }else{
      //if its false add the class
      content.classList.add('nav__secondary--content--is-visible');
    }
  });
}
