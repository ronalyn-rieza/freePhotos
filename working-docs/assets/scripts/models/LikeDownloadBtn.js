export default class LikeDownloadBtnToggle {
    constructor(getElements){
      const likeDownloadElements = this.getElements = getElements;
      //loop trough all elements
      for (var i = 0; i < likeDownloadElements.length; i++) {
        //call events function
        this.events(likeDownloadElements[i]);
      }
    }

    events(i) {
      //add mouseover event
      i.addEventListener('mouseover', el => {
        //finding div with class name images-grid__item
        const dl =  el.target.closest('.images-grid__item');
        //checking if element images-grid__item has found
        if(dl){
          //show like and download btn
            this.showLikeDownloadBtn(dl);
        }
      });
      //add mouseleave event
      i.addEventListener('mouseleave', el => {
        //finding div with class name images-grid__item
        const dl =  el.target.closest('.images-grid__item');
        //checking if element images-grid__item has found
        if(dl){
          //hiding like and download btn
          this.hideLikeDownloadBtn(dl);
        }
      });
    }

    showLikeDownloadBtn(item) {
      //sellecting element with class of like__download with in item element
      const ld = item.querySelector('.like__download');

      if(ld){
        //adding like__download--visible class to like__download
        ld.classList.add('like__download--visible');
      }
    }

     hideLikeDownloadBtn(item) {
      //sellecting element with class of like__download with in item element
      const ld = item.querySelector('.like__download');

      if(ld){
        //remove like__download--visible class to like__download
        ld.classList.remove('like__download--visible');
      }
    }
}
