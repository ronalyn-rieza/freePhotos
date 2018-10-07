export default class HidePassword {
    constructor(getElements){
      const passwordElements = this.getElements = getElements;
      //loop trough all elements
      for(var ii = 0; ii < passwordElements.length; ii++){
        this.events(passwordElements[ii]);
      }
    }

    events(i) {
      //add click event
      i.addEventListener('click', el => {
        //selecting the closest element with class of form__group--password-hide-show
        const selectHide = el.target.closest('.form__group--password-hide');
        if(selectHide){
          // checking if it has class of form__group--password-hide-show
           const passSeen = selectHide.classList.contains('form__group--password-hide-show');
           if(passSeen){
             //hide password
             this.hidePassword(selectHide);
           }
        }
      });
    }

    hidePassword(el) {
      //if it has remove the class
      el.classList.remove('form__group--password-hide-show');
      //selecting prev element sibling
      const passShowhide = el.previousElementSibling;
      //remove the class form__group--password-show-hide of the prev element sibling
      passShowhide.classList.remove('form__group--password-show-hide');
      //selecting the prev element sibling of passShowhide and change input type from text to password
      passShowhide.previousElementSibling.type = "password";
    }
}
