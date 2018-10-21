import * as Global from './Global';
import FormInput from './FormInput';
import InfoToggle from './Info';
import FirstLetterCap from './InputFirstLetterCap';

export default class Modal {
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
        //call modalOpen function
        this.modalOpen();

        //target closest element with class of modal-link
        const getImage =  el.target.closest('.modal-link');
        //target closest element with class of index-img-modal-link
        const getIndexPageImage =  el.target.closest('.index-img-modal-link');
        //target closest element with class of index-img-modal-link
        const getDeleteProfileImage =  el.target.closest('.delete-image');
        //target closest element with class of index-img-modal-link
        const getDeleteAccount =  el.target.closest('.delete-account');
        //target closest element with class of index-img-modal-link
        const getEditProfile =  el.target.closest('.edit-profile');
        //select element with class of modal__content
        const resultEl = document.getElementsByClassName('modal__content')[0];
        //setting ajax request type to GET
        const type = 'GET'

        if(getImage){
          //if openModalEl is true get its attribute data-id
          const imageId = getImage.getAttribute('data-id');
          //set ajax request url
          const url = 'modal.php?dataId=';
          //call ajax function
          Global.ajax(type, url, resultEl, imageId);

        }else if(getIndexPageImage){
          //if openModalEl is true get its attribute data-id
          const indexImageId = getIndexPageImage.getAttribute('data-id');
          //set ajax request url
          const url = 'front-img-modal.php?dataId=';
          //call ajax function
          Global.ajax(type, url, resultEl, indexImageId);

        }else if(getDeleteProfileImage){
          //if openModalEl is true get its attribute data-id
          const delProfImgId = getDeleteProfileImage.getAttribute('data-id');
          //set ajax request url
          const url = 'modal.php?userId=';
          //call ajax function
          Global.ajax(type, url, resultEl, delProfImgId);

        }else if(getDeleteAccount){
          //if openModalEl is true get its attribute data-id
          const deleteAccountId = getDeleteAccount.getAttribute('data-id');
          //set ajax request url
          const url = 'modal.php?userIdAccount=';
          //call ajax function
          Global.ajax(type, url, resultEl, deleteAccountId);

        }else if(getEditProfile){
          //if openModalEl is true get its attribute data-id
          const editProfileId = getEditProfile.getAttribute('data-id');
          //set ajax request url
          const url = 'modal.php?user_id_account=';
          //call ajax function
          Global.ajax(type, url, resultEl, editProfileId);
        }

      });

      //add onkeyup event on body element
      document.body.onkeyup = esc => {
          //getting which key has been press
          const key = esc.which || esc.keyCode;
          //if the key is escape
          if (key == 27) {
            //hide modal element
            this.modalClose();
          }
        };
    }

    modalOpen() {
      //selecting like download class of imageItem[i]
      const modalClass = document.getElementsByClassName('modal')[0];
      if(modalClass){
            //if modalClass is true add class modal--is-visible
            modalClass.classList.add('modal--is-visible');
            //add click event to children elements
            modalClass.addEventListener('click', (el) => {
              //prevent page from reloading
              el.preventDefault();
              //showing and hiding popover div
              //sellecting elements with class of form__group--info-link
              const infoLink = document.querySelectorAll('.form__group--info-link');
              if(infoLink){
                //if infoLink is true get new InfoToggle
                const formInfoLink = new InfoToggle(infoLink);
              }
              //input fisrt character value to uppercase
              //selecting all element with class of form__input--fistLetter-cap
              const firstLetterCap = document.querySelectorAll('.form__input--fistLetter-cap');
              if(firstLetterCap){
                //if firstLetterCap true get new FirstLetterCap
                const inputFirstletter = new FirstLetterCap(firstLetterCap);
              }
              //check if the element have been click has class of close
              if (el.target.matches('.close')){
                  //if its true call modalClose function
                  this.modalClose();
              }

              if(el.target.matches('.like')){
                //sellecting element with class of like
                const likeImage = el.target.closest('.like');
                if(likeImage){
                  //get like attribute id
                  const likeId = likeImage.getAttribute('id');
                  //set ajax request url
                  const url = 'modal.php?imageId=';
                  //set ajax request type to GET
                  const type = 'GET';
                  //call ajax function
                  Global.ajax(type, url, likeImage, likeId);
                }
              }
              //check if the element have been click has class of submit
              if (el.target.matches('.submit')){
                  //if its true call submit form with id of edit-profile-form
                document.getElementById("edit-profile-form").submit();
              }
            });
        }
        //then look for tag name body
        const bodyTag = document.getElementsByTagName('body')[0];
        if(bodyTag){
          //if tag name body has found add class of body
            bodyTag.classList.add('body');
        }
    }

    modalClose() {
      //if it is escape key look for elements with class of modal
      const modalDiv = document.getElementsByClassName('modal')[0];
      const modalContentDiv = document.getElementsByClassName('modal__content')[0];
      //then check if it has class of modal--is-visible
      const ItIsvisible = modalDiv.classList.contains('modal--is-visible');
      if(ItIsvisible){
        //if it has remove the class modal--is-visible
        modalDiv.classList.remove('modal--is-visible');
        modalContentDiv.innerHTML = '';
        //then look for html body tag
        const htmlBodyTag = document.getElementsByTagName('body')[0];
        if(htmlBodyTag){
          //if its found remove the class body
          htmlBodyTag.classList.remove('body');
        }
      }
    }
 }
