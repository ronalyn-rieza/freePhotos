import * as Global from './models/Global';
import MenuToggle from './models/Menu';
import LikeDownloadBtnToggle from './models/LikeDownloadBtn';
import ImageLike from './models/ImageLike';
import Modal from './models/Modal';
import FormInput from './models/FormInput';
import ShowPassword from './models/ShowPassword';
import HidePassword from './models/HidePassword';
import FirstLetterCap from './models/InputFirstLetterCap';
import InfoToggle from './models/Info';

//menu bar toggler for primary nav on medium size screen
//selecting element with class of nav__menu-icon--show-medium
const mMenuBar = document.querySelector('.nav__menu-icon--show-medium');
if(mMenuBar){
  //if mMenuBar is true get new MenuToggle
  const mMenuBarToggle = new MenuToggle(mMenuBar);
}

//menu bar toggler for secondary nav on small size screen
//selecting element with class of nav__menu-icon--show-small
const sMenuBar = document.querySelector('.nav__menu-icon--show-small');
if(sMenuBar){
  //if sMenuBar is true get new MenuToggle
  const sMenuBarToggle = new MenuToggle(sMenuBar);
}

//toggling like and download btn of images for large size screen
//sellecting all elements with class of images-grid__item
const imageItem = document.querySelectorAll('.images-grid__item');
if(imageItem){
  //if imageItem is true get new LikeDownloadBtnToggle
  const LikeDownToggle = new LikeDownloadBtnToggle(imageItem);
}

//show dynamic modal
//select element with class of open-modal
const openModal = document.querySelectorAll('.open-modal');
if(openModal){
  //if its true get new Modal
  const modal = new Modal(openModal);
}

//calling ajax request to like photos
//sellecting all elements with class of like
const likeImage = document.querySelectorAll('.like');
if(likeImage){
  //if likeImage id true get new ImageLike
  const likes = new ImageLike(likeImage);
  
}

//input fisrt character value to uppercase
//selecting all element with class of form__input--fistLetter-cap
const firstLetterCap = document.querySelectorAll('.form__input--fistLetter-cap');
if(firstLetterCap){
  //if firstLetterCap true get new FirstLetterCap
  const inputFirstletter = new FirstLetterCap(firstLetterCap);
}

//showing value of form input type password
//selecting all elements with class of form__group--password-show
const showPass = document.querySelectorAll('.form__group--password-show');
if(showPass){
  //if showPass is true get new showPassword
  const showPassword = new ShowPassword(showPass);
}

//hiding value of form input type password
//selecting all elements witd class of form__group--password-hide
const hidePass = document.querySelectorAll('.form__group--password-hide');
if(hidePass){
  //if hidePass is true get new HidePassword
  const hidePassword = new HidePassword(hidePass);
}

//showing and hiding popover div
//sellecting elements with class of form__group--info-link
const infoLink = document.querySelectorAll('.form__group--info-link');
if(infoLink){
  //if infoLink is true get new InfoToggle
  const formInfoLink = new InfoToggle(infoLink);
}

//use arrow up and down to navigate form inputs
//selecting element with class of first-input
const firstFormInput = document.querySelectorAll(".arrow-togglable");
if(firstFormInput){
  new FormInput(firstFormInput);
}
//close warning Message
//select element with class of warning-confirm__div
const warning = document.querySelector('.warning-confirm__div');
if(warning){
  //if warning is true add click event
  warning.addEventListener('click', el => {
    //check if it has clicked element with class of warning__close
    const selectWarningClose = el.target.matches('.warning__close');
    if (selectWarningClose){
      //if selectWarningClose is true select element with class of warning__close
      const closeWarnElement = el.target.closest('.warning__close');
      if(closeWarnElement){
        //if closeWarnElement is true select its parent element
        const parent = closeWarnElement.parentElement;
        if(parent){
          //if parent is true add class warning-invisible
          parent.classList.add('warning-invisible');
        }
      }
    }
  });
}

//select all element with class of reveal-item
const imgAnimate = document.querySelectorAll('.reveal-item');
if(imgAnimate){
  //loop through imgAnimate
  for(var i = 0; i < imgAnimate.length; i++){
    const imgAnimateIndex = i;
    //execute waypoint
    new Waypoint({
      element: imgAnimate[imgAnimateIndex],
      handler: function(direction) {
        if(direction === 'down'){
          this.element.classList.add('item-is-visible');
        }
      },
      offset:"90%"
    });
  }
}
