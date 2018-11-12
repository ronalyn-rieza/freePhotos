export default class FormInput {
    constructor(getElements){
      const contactFormInputElements = this.getElements = getElements;
      //check if first element is active
      const activeElement = this.activeElement = contactFormInputElements[0];
      if (activeElement){
        //if its active call arrowToggle function
        this.arrowToggle(contactFormInputElements, 0, contactFormInputElements[0], contactFormInputElements.length);
      }
      //loop trough all elements
      for(let ii = 0; ii < contactFormInputElements.length; ii++){
          //call events function
          this.events(contactFormInputElements, ii, contactFormInputElements[ii], contactFormInputElements.length);
      }
    }

    events(items, i, el, length) {
      //add click event
      el.addEventListener('click', () => {
          //if an element has been click call arrowToggle function
          this.arrowToggle (items, i, el, length);
      });
      //add focus event
      el.addEventListener('focus', () => {
          //if an element has been focus call arrowToggle function
          this.arrowToggle (items, i, el, length);
      });
    }

  arrowToggle (items, i, el, length) {
      //add onkeydown event
      document.onkeyup = (e) => {
        // switch from e keycode to another
        switch (e.keyCode || e.which) {
          //if key is arrow up
          case 38:
            if(i == 0){
              i = length - 1;
              //set el index to i
              const x = el.index = i;
              //focus item with current element index
              items[x].focus();
            }else{
              i = --i;
              //set el index to i
              const y = el.index = i;
              //focus item with current element index
              items[y].focus();
            }
            break;
          //if key is arrow down
          case 40:
          if(i + 1 == length){
             i = 0;
             //set el index to i
             const a = el.index = i;
             //focus item with current element index
             items[a].focus();
          }else{
            i = ++i;
            //set el index to i
            const b = el.index = i;
            //focus item with current element index
            items[b].focus();
         }
            break;
        }
      };
    }
}
