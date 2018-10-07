export default class ShowPassword {
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
        //target elements with class of form__group--password-show
        const selectShow =  el.target.closest('.form__group--password-show');
        if(selectShow){
          //show password
          this.showPassword(selectShow);
        }
      });
    }

     showPassword (el) {
      //adding class of form__group--password-show-hide to current selected element
        el.classList.add('form__group--password-show-hide');
      //adding class of form__group--password-hide-show to next sibling of the current selected element
        el.nextElementSibling.classList.add('form__group--password-hide-show');
      //changing input password type to text of prev sibling of the current selected element
        el.previousElementSibling.type = "text";
    }
}
