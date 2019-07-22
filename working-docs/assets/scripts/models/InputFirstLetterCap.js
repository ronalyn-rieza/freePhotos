export default class FirstLetterCap {
    constructor(getElements){
      //const inputElements = this.getElements = getElements;
      this.getElements = getElements;
      //loop trough all elements
      for(let ii = 0; ii < this.getElements.length; ii++){
        this.events(this.getElements[ii]);
      }
    }

    events(i) {
      //add click event
      i.addEventListener('keyup', el => {
        //target element with class of form__input--fistLetter-cap
        const caps =  el.target.closest('.form__input--fistLetter-cap');
        if(caps){
          //turn the first character to uppercase
          this.UpperCase(caps);
        }
      });
    }

     UpperCase (el) {
      const value =  el.value.replace(/^\s+/g, '');
      //change the first letter to Uppercase
      const firstLetterCapValue = value.charAt(0).toUpperCase() + value.slice(1);
      //changing the value of selected elements
      el.value = firstLetterCapValue;
    }
}
