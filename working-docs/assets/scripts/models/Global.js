export const ajax = (type, url, resultEl, id) =>{
  //check if resultEl contains class modal-content
  const elToOutputData = resultEl.classList.contains('modal__content');
  //check if resultEl contains class like
  const elToOutputLikeData = resultEl.classList.contains('like');
  //set random to randomfunction
  const random = Math.random();

  let request;

  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    request = new XMLHttpRequest();
  } else {// code for IE6, IE5
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //open request
  request.open(type, url+id+'&rand='+random);
  //request result function
  request.onload = () => {
    //checking if the request has got through
    if(request.status >=200 && request.status < 400){

      const data = request.responseText;

      if(elToOutputData){
        //if elToOutputData is true print response text
        resultEl.insertAdjacentHTML('afterbegin', data);

      }else if(elToOutputLikeData){
        //if elToOutputLikeData clear resultEl
        resultEl.innerHTML = '';
        //print response text
        resultEl.insertAdjacentHTML('afterbegin', data);
        //set resultEl class to disabled
        resultEl.className = "disabled";
      }
    }else{
      alert('Something went wrong. Please try again.')
    }
  };
  //send request
  request.send();
}
