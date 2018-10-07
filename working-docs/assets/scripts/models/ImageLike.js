import * as Global from './Global';

export default class ImageLike {
    constructor(getElements){
      const imageLikeElements = this.getElements = getElements;
      //loop trough all elements
      for(var ii = 0; ii < imageLikeElements.length; ii++){
        this.events(imageLikeElements[ii]);
      }
    }

    events(i) {
      //add click event
      i.addEventListener('click', el => {
        //prevent page from reloading
          el.preventDefault();
          //sellecting element with class of like
          const like =  el.target.closest('.like');

          if(like){
            //get like attribute id
            const likeId = like.getAttribute('id');
            //set ajax request url
            const url = 'modal.php?imageId=';
            //set ajax request type to GET
            const type = 'GET';
            //call ajax function
            Global.ajax(type, url, like, likeId);
          }
      });
    }
}
