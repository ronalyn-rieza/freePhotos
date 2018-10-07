export default class InfoToggle {
    constructor(getElements){
      const formInfoElements = this.getElements = getElements;
      //loop trough all elements
      for (var i = 0; i < formInfoElements.length; i++) {
        //call events function
        this.events(formInfoElements[i]);
      }
    }

    events(i) {
      //add click event
      i.addEventListener('click', el => {
        //preventing page from reloading
        el.preventDefault();
        //target element with class of form__group--info-link
        const selectInfoLink = el.target.closest('.form__group--info-link');

        if(selectInfoLink){
          //call toggleInfo function
          this.toggleInfo(selectInfoLink);
        }
      });
    }

   toggleInfo (el) {
      //selecting all popover div
      const info = document.querySelectorAll('.popover');
      //looping through popover div
      for(var ii = 0; ii< info.length; ii++){
        //remove the class popover__visible to hide all popover div
        info[ii].classList.remove('popover__visible');
      }
      //getting data-content and title attribute of info link
      const dataContent = el.getAttribute('data-content');
      const dataTitle = el.getAttribute('title');
      //selecting popover div
      const selectpopOverDiv = el.nextElementSibling;
      //checking if it has popover__visible class
      const popOverIsVisible = selectpopOverDiv.classList.contains('popover__visible');
        //hiding and showing popover div
        if(popOverIsVisible){
          //if popover div is visible, hide and empty it
          this.clearInfo(popOverIsVisible);
        }else{
          //if not show it
          this.showHideInfo(selectpopOverDiv, dataContent, dataTitle);
        }
    }

    //clearing and hiding popover div
    clearInfo (el) {
      //hide popover div
       el.classList.remove('popover__visible');
       //clear popover div
       el.innerHTML = '';
    };

    //showing popover div
     showHideInfo (elDiv, dataContent, dataTitle) {
      //selecting popover wrapper div
      const wraper = document.querySelectorAll('.popover__wrapper');
      //looping to all wrapper div
      for(var x = 0; x < wraper.length; x++){
        //selecting popover div
        const wrapperParentDiv = wraper[x].parentElement;
        //clear popover div
        wrapperParentDiv.innerHTML = '';
      }
      //add class of popover__visible to popover div
      elDiv.classList.add('popover__visible');
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
       elDiv.insertAdjacentHTML('afterbegin', popOverContent);

       //unfocus form
       //select all element with class of form__effect
       const formEffect = document.querySelectorAll('.form__effect');
       //looping through element with class of form__effect
       for(var y = 0; y < formEffect.length; y++){
         //add the class form__effect--visible to unfocus form
         formEffect[y].classList.add('form__effect--visible');
       }

       //select element of popover div with class of popover__close
       const closePopOver = document.querySelector('.popover__close');
       //adding click event to closePopOver
       closePopOver.addEventListener('click', el => {
         //hide popover div
         this.hideInfo();
      });
    }

    //hide popover div
     hideInfo () {
      //select parent element of closePopOver
      const PopoverTitleDiv = document.querySelector('.popover__title');
      //selecting div with class of popover__wrapper
      const PopoverWrapperDiv = PopoverTitleDiv.parentElement;
      //selecting div with class of popover
      const PopOverDiv = PopoverWrapperDiv.parentElement;
      //hide and empty popover div
      this.clearInfo(PopOverDiv);

      //focus form
      //sellectng all elements with class 0f form__effect
      const FormEffect = document.querySelectorAll('.form__effect');
      //looping through element with class of form__effect
      for(var iii = 0; iii < FormEffect.length; iii++){
        //remove the class form__effect--visible to focus form
        FormEffect[iii].classList.remove('form__effect--visible');
      }
    }
}
