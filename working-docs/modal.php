<!--<div class="modal__images">
<picture>
  <source srcset="assets/images/web-imgs/standard_orange_juice.jpg" media="(min-width: 768px)">
  <source srcset="assets/images/web-imgs/standard_orange_juice.jpg" media="(max-width: 768px)">
  <img data-srcset="assets/images/web-imgs/standard_orange_juice.jpg" alt="thumbnail_howth_lighthouse.jpg" class="lazyload">
</picture>
<div class="modal__like-download">
  <a href="#" id="1" class="like__download--likes-link btn btn__small-secondary like">1 <svg class="icon-smallest icon-light">
    <use xlink:href="assets/images/logos/sprite.svg#icon-heart-outlined"></use></svg></a>
    <a href="#" class="like__download--download-link btn btn__small-primary"><svg class="icon-smallest icon-light">
    <use xlink:href="assets/images/logos/sprite.svg#icon-download"></use>
  </svg> Download</a>
</div>
</div>


<span class='like__download--likes-link btn btn__small-dark'>You <svg class="icon-smallest icon-light">
  <use xlink:href="assets/images/logos/sprite.svg#icon-heart-outlined"></use></svg> 56</span>
-->


  <div class="modal__form">
  <div class="card modal__form--card">
    <h3 class="card__heading card__heading-medium">Edit profile</h3>
    <form id="edit-profile-form" method="post" action="" class="mt-medium" autocomplete="off">
      <label for="firstname" class="text-muted form__effect">Firstname:</label>
       <div class="form__group">
         <input name="profile_fname" type="text" id="firstname" pattern="^[^-\s][a-zA-Z ,\.'\-]{2,20}$" title="Must contain at least 2 and no more than 20 characters, no numbers and can only use . , ' - as special characters." class="form__item form__group--input form__effect form__input--fistLetter-cap" value="" required>
        <div class="form__group--info">
         <a href="#" class="form__group--info-link" title="Your Firstname" data-content="Must contain at least 2 and no more than 20 characters, no numbers and can only use . , ' - as special characters."><svg class="icon-smallest icon-primary">
           <use xlink:href="assets/images/logos/sprite.svg#icon-info"></use></svg></a>
           <div class="popover"></div>
       </div>
      </div>
         <label for="lastname" class="text-muted form__effect">Lastname:</label>
      <div class="form__group mb">
         <input name="profile_lname" type="text" id="lastname" pattern="^[^-\s][a-zA-Z ,\.'\-]{2,20}$" title="Must contain at least 2 and no more than 20 characters, no numbers and can only use . , ' - as special characters." class="form__item form__group--input form__effect form__input--fistLetter-cap" value="" required>
        <div class="form__group--info">
         <a href="#" class="form__group--info-link" title="Your Lastname" data-content="Must contain at least 2 and no more than 20 characters, no numbers and can only use . , ' - as special characters."><svg class="icon-smallest icon-primary">
           <use xlink:href="assets/images/logos/sprite.svg#icon-info"></use></svg></a>
           <div class="popover"></div>
        </div>
      </div>
         <label for="your-email" class="text-muted form__effect">E-mail:</label>
      <div class="form__group">
         <input name="profile_email" type="email" id="your-email" pattern="^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,64}@[\w.\-]+\.[a-zA-Z]{2,3}$" title="example@mail.com" class="form__item form__group--input form__effect" value="" required>
        <div class="form__group--info">
         <a href="#" class="form__group--info-link" title="Your e-mail" data-content="example@mail.com"><svg class="icon-smallest icon-primary">
           <use xlink:href="assets/images/logos/sprite.svg#icon-info"></use></svg></a>
           <div class="popover"></div>
        </div>
      </div>
      <div class="flex__button form__effect mt-medium">
          <input type="submit" name="save_profile_changes" value="Save" class="btn btn__primary flex__button-item submit">
          <a href="#" class="btn btn__dark flex__button-item close">Cancel</a>
      </div>
    </form>
  </div>
</div>
<!--
<div class="card card__small confirm__request">
  <h3 class="card__heading card__heading-small">Are you sure you want to delete your Account?</h3>
  <div class="card__footer flex__button mt-medium">
    <a href='profile.html' class='btn btn__dark flex__button-item '>No</a>
    <a href='#' class='btn btn__secondary flex__button-item '>Yes</a>
  </div>
</div>

<div class="card card__small confirm__request">
  <h3 class="card__heading card__heading-small">Are you sure you want to delete your Profile Photo?</h3>
  <div class="card__body">
    <img src="assets/images/users-profile-photo/abc.jpg" alt="profile-photo" class="profile_delete_photo">
  </div>
  <div class="card__footer flex__button mt-medium">
    <a href='profile.html' class='btn btn__dark flex__button-item '>No</a>
    <a href='#' class='btn btn__secondary flex__button-item '>Yes</a>
  </div>
</div>-->
