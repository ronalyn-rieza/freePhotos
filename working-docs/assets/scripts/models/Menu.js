export default class MenuToggle {
    constructor(getElements){
      //const menuElements = this.getElements = getElements;
      this.getElements = getElements;
      //this.events(menuElements);
      this.events(this.getElements);
    }

    events() {
      //add click event
      this.getElements.addEventListener('click', el => {
        //get closest element with class of nav__menu-icon--show-medium
        const mediumMenuEl = el.target.closest('.nav__menu-icon--show-medium');
          //get closest element with class of nav__menu-icon--show-small
        const smallMenuEl = el.target.closest('.nav__menu-icon--show-small');

        if(mediumMenuEl){
          //call toggleTheMenu function
          this.toggleTheMenu(mediumMenuEl);
        }else if(smallMenuEl){
          //call toggleTheMenu function
          this.toggleTheMenu(smallMenuEl);
        }
      });
    }

    toggleTheMenu (menuSize) {
      //check if menuSize has class of nav__menu-icon--close-x
      const iconClose = menuSize.classList.contains('nav__menu-icon--close-x');
      if(iconClose){
        //if its true remove the class
        menuSize.classList.remove('nav__menu-icon--close-x');
      }else{
        //if its false add the class
        menuSize.classList.add('nav__menu-icon--close-x');
      }
      //selecting div with class of nav__primary--content
      const primaryContent = menuSize.parentElement.querySelector('.nav__primary--content');
      //selecting div with class of nav__secondary--content
      const secondaryContent = menuSize.parentElement.querySelector('.nav__secondary--content');
      //checking if it has class of nav__primary--content--is-visible
      if(primaryContent){
      //checking if primaryContent has class of nav__primary--content--is-visible
      const contentVisible = primaryContent.classList.contains('nav__primary--content--is-visible');
        if(contentVisible){
          //if its true remove the class
          primaryContent.classList.remove('nav__primary--content--is-visible');
        }else{
          //if its false add the class
          primaryContent.classList.add('nav__primary--content--is-visible');
        }

      }else if(secondaryContent){
        //checking if secondaryContent has class of nav__secondary--content--is-visible
        const contentVisible = secondaryContent.classList.contains('nav__secondary--content--is-visible');
        if(contentVisible){
          //if its true remove the class
          secondaryContent.classList.remove('nav__secondary--content--is-visible');
        }else{
          //if its false add the class
          secondaryContent.classList.add('nav__secondary--content--is-visible');
        }
      }
    }
  }
