const animBgImg = document.querySelectorAll('._bgi');
const animBgButton = document.querySelector('.anim__button');
if (animBgImg.length > 0) {
	for (let index = 0; index < animBgImg.length; index++) {
		const animBgImgs = animBgImg[index];
		animBgButton.addEventListener("click", function () {
			if(!animBgImgs.classList.contains("_bgi_active")) {
				animBgImgs.classList.add("_bgi_active");
				localStorage.animbgimg = "click";
			} else {
				animBgImgs.classList.remove("_bgi_active");
				localStorage.removeItem("animbgimg");
			}
		});
		if(localStorage.animbgimg == "click") {
			animBgImgs.classList.add("_bgi_active");
		}
 	}
}

var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_mobile');
} else {
	document.body.classList.add('_pc');
   $(document).ready(function(){
      $('.mywork__content_block').hover(
          function() { 
              $(this).find('.mywork__content_wies').toggleClass('_active');
          }
      );
  });
}
//Прелоадер
// document.body.onload = function () {
// 	setTimeout(function () {
// 		var preloader = document.querySelector(".preloader");
// 		if (!preloader.classList.contains("_show")) {
// 			document.body.classList.remove("_lock");
// 			preloader.classList.add("_show");
// 		}
// 	}, 1000);
// }
//Кнопка на верх + плавный скролл наверх
document.addEventListener('DOMContentLoaded', () => {
	let header = document.querySelector(".header");
	let toTopBtn = document.querySelector('.up__button');
	let begushayStroka = document.querySelector('.begushay__stroka');

	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			header.classList.add("_active");
			toTopBtn.classList.add("_active");
			begushayStroka.classList.add("_active");
		} else {
			header.classList.remove("_active");
			toTopBtn.classList.remove("_active");
			begushayStroka.classList.remove("_active");
		}
	}
	// плавный скролл наверх 
	toTopBtn.addEventListener('click', function () {
		window.scrollBy({
			top: -document.documentElement.scrollHeight,
			behavior: 'smooth'
		});
	});
});
// Треугольник
let menuListSublists = document.querySelectorAll(".menu__list_sublist");
if (menuListSublists.length > 0) {
	for (let index = 0; index < menuListSublists.length; index++) {
		const menuListSublist = menuListSublists[index];
		menuListSublist.addEventListener("click", function (e) {
			menuListSublist.classList.toggle("_active");
		});
	}
}
// Мену бургер
const menuBodyLock = document.querySelector("body");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		menuBodyLock.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
	menuBody.classList.contains('_active');
	menuBody.addEventListener("click", function (e) {
		if (!e.target.closest(".menu__link")) {
			menuBodyLock.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
		}
	});
}
const popupButton = document.querySelectorAll(".popup__button");
const popup = document.querySelector(".popup");
const backIcons = document.querySelector(".back__icons");
const lockPaddings = document.querySelector(".back__icons");
if (popupButton.length > 0) {
	for (let index = 0; index < popupButton.length; index++) {
		const popupButtons = popupButton[index];
		popupButtons.addEventListener("click", function (e) {
			popup.classList.toggle("_active");
			bodyLocks();
		});
	};
	popup.addEventListener("click", function (e) {
		if (!e.target.closest(".popup__body")) {
			popup.classList.remove("_active");
			backIcons.classList.remove("_active");
			menuBodyLock.style.paddingRight = '0px';
     		menuBodyLock.classList.remove('_lock');
		};
	});
}
function bodyLocks() {
   const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px';

   if (lockPaddings.length > 0) {
      for (let index = 0; index < lockPaddings.length; index++) {
         const el = lockPaddings[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }  
   menuBodyLock.style.paddingRight = lockPaddingValue;
   menuBodyLock.classList.add('_lock');
}
if (backIcons) {
	backIcons.addEventListener("click", function (e) {
		popup.classList.remove("_active");
		backIcons.classList.remove("_active");
		menuBodyLock.style.paddingRight = '0px';
      	menuBodyLock.classList.remove('_lock');
	});
}

// Прокрутка при клике на меню
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
			if (iconMenu.classList.contains("_active")) {
				document.body.classList.remove("_lock");
				iconMenu.classList.remove("_active");
				menuBody.classList.remove("_active");
			};
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}




const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 600;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
 	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest('.popup__info'));
			e.preventDefault();
		});
	}
}
	
function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup__info._active');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('_active');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__info_body')) {
            popupClose(e.target.closest('.popup__info'));
         } 
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock){
      popupActive.classList.remove('_active');
      if (doUnlock) {
         bodyUnLock();
      }
   };
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }  
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('_lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener("keydown", function (e) {
	if (e.which === 27) {
	   const popupActive = document.querySelector('.popup__info._active');
		popupClose(popupActive);
   }
});

(function () {
   // проверяет, поддержку
   if (!Element.prototype.closest) {
      // peализуем
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches (css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   // проверяеме поддержку
   if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})();



// Контакт
// document.addEventListener("DOMContentLoaded", function () {
// 	const form = document.getElementById("form");
// 	form.addEventListener("submit", formSend);

// 	async function formSend(e) {
// 		e.preventDefault();

// 		let error = formValidate(form);

// 		let formData = new FormData(form);
// 		formData.append("image", formImage.files[0]);



// 		if (error === 0) {
// 			form.classList.add("_sending");
// 			let result = await fetch("sendmail.php", {
// 				method: "POST",
// 				body: formData
// 			});
// 			if (result.ok) {
// 				let result = await result.json();
// 				alert(result.message);
// 				formPreview.innerHTML = "";
// 				form.reset();
// 				form.classList.remove("_sending");
// 			} else {
// 				alert("Ошибка");
// 				form.classList.remove("_sending");
// 			}		
// 		} else {
// 			alert("Заполните обязательные поля");
// 		}
// 	}

// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll("._req");

// 		for (let i = 0; i < formReq.length; i++) {
// 			const input = formReq[i];
// 			formRemoveError(input);

// 			if (input.classList.contains("_email")) {
// 				if (emailTest(input)) {
// 					formAddError(input);
// 					error++;
// 				}
// 			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
// 					formAddError(input);
// 					error++;
// 			} else {
// 				if (input.value === "") {
// 					formAddError(input);
// 					error++;
// 				}
// 			}
// 		}
// 		return error;
// 	}
// 	function formAddError(input) {
// 		input.parentElement.classList.add("_error");
// 		input.classList.add("_error");
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove("_error");
// 		input.classList.remove("_error");
// 	}
// 	function emailTest(input) {
// 		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// 	}
	
// Получаем инпут file в переменную
const formImage = document.getElementById("formImage");
// Получаем див для превью в переменную
const formPreview = document.getElementById("formPreview");

// Слушаем изменения в инпуте file
formImage.addEventListener("change", () => {
	uploadFile(formImage.files[0]);
});

function uploadFile(file) {
	// Проверяем тип файла
	if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
		alert("Разрешены толко изображения.");
		formImage.value = "";
		return;
	}
	// Проверим размер файла (< 2 mb)
	if (file.size > 2 * 1024 *1024) {
		alert("Файл должен быть менее 2 mb");
		return;
	}

	var reader = new FileReader();
	reader.onload = function (e) {
		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
	};
	reader.onerror = function (e) {
		alert("Ошибка");
	};
	reader.readAsDataURL(file);
}
// });
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("yessssssssssssss!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});