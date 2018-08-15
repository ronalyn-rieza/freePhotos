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

const imageItem = document.querySelectorAll('.images-grid__item');

//looping to all images with class of images-grid__item
for (var i = 0; i < imageItem.length; i++) {
  //adding mouseover event listener
  imageItem[i].addEventListener('mouseover', el => {
    //finding div with class name images-grid__item
    const dl =  el.target.closest('.images-grid__item');
    //checking if element images-grid__item has found
    if(dl){
      //selecting like download class of imageItem[i]
      const ld = dl.querySelector('.like__download');

      if(ld){
        //adding like__download--visible class to like__download
        ld.classList.add('like__download--visible');
      }
    }
  });
  //adding mouseleave event listener
  imageItem[i].addEventListener('mouseleave', el => {
    //finding div with class name images-grid__item
    const dl =  el.target.closest('.images-grid__item');
    //checking if element images-grid__item has found
    if(dl){
      //selecting like download class of imageItem[i]
      const ld = dl.querySelector('.like__download');

      if(ld){
          //adding like__download--visible class to like__download
        ld.classList.remove('like__download--visible');
      }
    }
  });
}

const openModal = document.querySelectorAll('.open-modal');
//looping to all elements with class of open-modal
for (var i = 0; i < openModal.length; i++) {
  //adding click event listener
  openModal[i].addEventListener('click', el => {
    //preventing anchor tag from reloading
      el.preventDefault();
    //finding div with class of modal
    const modalClass = document.getElementsByClassName('modal')[0];

    if(modalClass){
      //if div with class of modal has been found add class of modal is visible
      modalClass.classList.add('modal--is-visible');
      //then look for tag name body
      const bodyTag = document.getElementsByTagName('body')[0];
      if(bodyTag){
        //if tag name body has found add class of body
        bodyTag.classList.add('body');
      }
    }
  });
}

const closeModal = document.querySelector('.modal__close');
if(closeModal){
  //if element with class of modal__close add click event
  closeModal.addEventListener('click', el => {
    //selecting the element with class of modal__close
    const close = el.target.closest('.modal__close');
    if(close){
      //if it has been selected look for elements with class name of modal
      const classModal = document.getElementsByClassName('modal')[0];
      //check if has class of modal--is-visible
      const modalIsVisible = classModal.classList.contains('modal--is-visible');
      if(modalIsVisible){
        //if it has remove the class modal--is-visible
        classModal.classList.remove('modal--is-visible');
        //then look for html body tag
        const bodyNameTag = document.getElementsByTagName('body')[0];
        if(bodyNameTag){
          //if its found remove the class of body
          bodyNameTag.classList.remove('body');
        }
      }
    }
  });
}

document.body.onkeyup = el => {
  //getting which has been on key up
  const key = el.which || el.keyCode;
  if (key == 27) {
    //if it is escape key look for elements with class of modal
    const modalDiv = document.getElementsByClassName('modal')[0];
    //then check if it has class of modal--is-visible
    const ItIsvisible = modalDiv.classList.contains('modal--is-visible');
    if(ItIsvisible){
      //if it has remove the class modal--is-visible
      modalDiv.classList.remove('modal--is-visible');
      //then look for html body tag
      const htmlBodyTag = document.getElementsByTagName('body')[0];
      if(htmlBodyTag){
        //if its found remove the class body
        htmlBodyTag.classList.remove('body');
      }
    }
  }
};
