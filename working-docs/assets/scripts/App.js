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

const firstLetterCap = document.querySelectorAll('.form__input--fistLetter-cap');
//looping to all element with class of form__input--fistLetter-cap
for (var i = 0; i < firstLetterCap.length; i++) {
  //adding keup event listener
  firstLetterCap[i].addEventListener('keyup', el => {
    const caps =  el.target.closest('.form__input--fistLetter-cap');
      //getting the value of selected element
      const value =  caps.value;
      //change the first letter to Uppercase
      const firstLetterCapValue = value.charAt(0).toUpperCase() + value.slice(1);
      //changing the value of selected elements
      caps.value = firstLetterCapValue;
  });
}

const showPass = document.querySelectorAll('.form__group--password-show');
//looping to all elements with class of form__group--password-show
for (var i = 0; i < showPass.length; i++) {
  //adding click event listener
  showPass[i].addEventListener('click', el => {
    const selectShow =  el.target.closest('.form__group--password-show');
    //adding class of form__group--password-show-hide to current selected element
      selectShow.classList.add('form__group--password-show-hide');
    //adding class of form__group--password-hide-show to next sibling of the current selected element
      selectShow.nextElementSibling.classList.add('form__group--password-hide-show');
    //changing input password type to text of prev sibling of the current selected element
      selectShow.previousElementSibling.type = "text";
  });
}

const hidePass = document.querySelectorAll('.form__group--password-hide');
//looping to all elements with class of form__group--password-hide
for (var i = 0; i < hidePass.length; i++) {
  //adding click event listener
  hidePass[i].addEventListener('click', el => {
    //selecting the closest element with class of form__group--password-hide-show
    const selectHide = el.target.closest('.form__group--password-hide');
   // checking if it has class of form__group--password-hide-show
    const passSeen = selectHide.classList.contains('form__group--password-hide-show');
    if(passSeen){
      //if it has remove the class
      selectHide.classList.remove('form__group--password-hide-show');
      //selecting prev element sibling
      const passShowhide = selectHide.previousElementSibling;
      //remove the class form__group--password-show-hide of the prev element sibling
      passShowhide.classList.remove('form__group--password-show-hide');
      //selecting the prev element sibling of passShowhide and change input type from text to password
      passShowhide.previousElementSibling.type = "password";
    }
  });
}

const infoLink = document.querySelectorAll('.form__group--info-link');
//looping to all elements with class of form__group--info-link
for (var i = 0; i < infoLink.length; i++) {
  //adding click event listener
  infoLink[i].addEventListener('click', el => {
    //preventing page from reloading
    el.preventDefault();
    //selecting element with class of form__group--info-link
    const selectInfoLink = el.target.closest('.form__group--info-link');

    if(selectInfoLink){
      //selecting all popover div
      const info = document.querySelectorAll('.popover');
      //looping through popover div
      for(var x=0; x< info.length; x++){
        //remove the class popover__visible to hide all popover div
        info[x].classList.remove('popover__visible');
      }
      //getting data-content and title attribute of info link
      const dataContent = selectInfoLink.getAttribute('data-content');
      const dataTitle = selectInfoLink.getAttribute('title');
      //selecting popover div
      const selectpopOverDiv = selectInfoLink.nextElementSibling;
      //checking if it has popover__visible class
      const popOverIsVisible = selectpopOverDiv.classList.contains('popover__visible');
        //hiding and showing popover div
        if(popOverIsVisible){
          //if it has class of popover__visible remove class
          selectpopOverDiv.classList.remove('popover__visible');
          //clear popover div
          selectpopOverDiv.innerHTML = '';
        }else{
          //selecting popover wrapper div
          const wraper = document.querySelectorAll('.popover__wrapper');
          //looping to all wrapper div
          for(var v = 0; v < wraper.length; v++){
            //selecting popover div
            const wrapperParentDiv = wraper[v].parentElement;
            //clear popover div
            wrapperParentDiv.innerHTML = '';
          }
          //add class of popover__visible to popover div
          selectpopOverDiv.classList.add('popover__visible');
          //dynamic popover title and content mark up
          const popOverContent = `
            <div class="popover__wrapper">
            <div class="popover__title">
            <p>${dataTitle}</p>
            <span class="popover__close">X</span>
            </div>
            <p class="popover__content">${dataContent}</p>
            </div>
          `;
           //add the popover title and content
           selectpopOverDiv.insertAdjacentHTML('afterbegin', popOverContent);

           const formEffect = document.querySelectorAll('.form__effect');
           //looping through popover div
           for(var z = 0; z < formEffect.length; z++){
             //remove the class popover__visible to hide all popover div
             formEffect[z].classList.add('form__effect--visible');
           }

           //select element of popover div with class of popover__close
           const closePopOver = document.querySelector('.popover__close');
           //adding click event to closePopOver
           closePopOver.addEventListener('click', el => {
             //select parent element of closePopOver
             const PopoverTitleDiv = document.querySelector('.popover__title');
             //selecting div with class of popover__wrapper
             const PopoverWrapperDiv = PopoverTitleDiv.parentElement;
             //selecting div with class of popover
             const PopOverDiv = PopoverWrapperDiv.parentElement;
             // remove class of popover__visible
             PopOverDiv.classList.remove('popover__visible');
             //clear popover div
             PopOverDiv.innerHTML = '';

             const formEffect = document.querySelectorAll('.form__effect');
             //looping through popover div
             for(var q = 0; q < formEffect.length; q++){
               //remove the class popover__visible to hide all popover div
               formEffect[q].classList.remove('form__effect--visible');
             }
          });
        }
      }
    });
 }
