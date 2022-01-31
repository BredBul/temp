let user_icon = document.querySelector('.user-header__icon')
user_icon.addEventListener("click", function (e) {
   let user_menu = document.querySelector('.user-header__menu')
   user_menu.classList.toggle('_active')
})

document.documentElement.addEventListener('click', function (e) {
   if (!e.target.closest('.user-header')) {
      let user_menu = document.querySelector('.user-header__menu')
      user_menu.classList.remove('_active')
   }
})


function ibg() {
   $.each($('._ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}
ibg();

//Menu


var iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
   var delay = 500;
   var body = document.querySelector("body");
   var menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", function (e) {
      if (!body.classList.contains('_wait')) {
         body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
      }
   });
}

;

function menu_close() {
   var iconMenu = document.querySelector(".icon-menu");
   var menuBody = document.querySelector(".menu__body");
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
} //=================
//BodyLock


function body_lock(delay) {
   var body = document.querySelector("body");

   if (body.classList.contains('_lock')) {
      body_lock_remove(delay);
   } else {
      body_lock_add(delay);
   }
}

function body_lock_remove(delay) {
   var body = document.querySelector("body");

   if (!body.classList.contains('_wait')) {
      var lock_padding = document.querySelectorAll("._lp");
      setTimeout(function () {
         for (var index = 0; index < lock_padding.length; index++) {
            var el = lock_padding[index];
            el.style.paddingRight = '0px';
         }

         body.style.paddingRight = '0px';
         body.classList.remove("_lock");
      }, delay);
      body.classList.add("_wait");
      setTimeout(function () {
         body.classList.remove("_wait");
      }, delay);
   }
}

function body_lock_add(delay) {
   var body = document.querySelector("body");

   if (!body.classList.contains('_wait')) {
      var lock_padding = document.querySelectorAll("._lp");

      for (var index = 0; index < lock_padding.length; index++) {
         var el = lock_padding[index];
         el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }

      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      body.classList.add("_lock");
      body.classList.add("_wait");
      setTimeout(function () {
         body.classList.remove("_wait");
      }, delay);
   }
} //=================