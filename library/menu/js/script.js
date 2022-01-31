/* ====================  Strict regime  ==================== */ 
'use strict';
/* =============================================  Default  --Start--  ============================================= */
/* =============================================  here PRELOADER  ============================================= */
/* ===================================  Identify Computer or Mobile  --Start--  =================================== */
function defineСomputerOrMobile() {
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
		if (document.body.classList.contains("_pc")) {
			document.body.classList.remove("_pc");
		}
		document.body.classList.add("_mobile");
	} else {
		if (document.body.classList.contains("_mobile")) {
			document.body.classList.remove("_mobile");
		}
		document.body.classList.add("_pc");
	}
}
defineСomputerOrMobile();
/* ===================================  Identify Computer or Mobile  --End--  =================================== */
/* ====================  Checking the screen resizing  --Start--  ==================== */
window.addEventListener("resize", function () {
	/* ====================  Launching Functions  --Start--  ==================== */
	defineСomputerOrMobile();
	deleteActiveWindowLarger767px();
	deleteActiveAtSublistOnPc();
	dynamic_adapt();	
	/* ====================  Launching Functions  --End--  ==================== */
});
/* ====================  Checking the screen resizing  --End--  ==================== */
/* ====================  Delete an asset if the screen size is larger than 767px  --Start--  ==================== */
function deleteActiveWindowLarger767px() {
	let windwWidth = window.innerWidth;
	if (windwWidth > 767) {
		if (iconMenu.classList.contains("_active") || body.classList.contains("_lock")) {
			body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
		}
	}
}
/* ====================  Delete an asset if the screen size is larger than 767px  --End--  ==================== */
/* ====================  Delete the active one in the Sublist on the PC, if there is one  --Start--  ==================== */
function deleteActiveAtSublistOnPc() {
	if (document.body.classList.contains("_pc")) {
		let menuListSublists = document.querySelectorAll(".menu__list_sublist");
		if (menuListSublists.length > 0) {
			for (let index = 0; index < menuListSublists.length; index++) {
				const menuListSublist = menuListSublists[index];
				if (menuListSublist.classList.contains("_active")) {
					menuListSublist.classList.remove("_active");
				}
			}
		}
	}
}
/* ====================  Delete the active one in the sublist on the PC, if there is one  --End--  ==================== */
/* =============================================  here Progress Bar  ============================================= */
/* =============================================  here Hi Height  ============================================= */
/* =============================================  here IBG  ============================================= */
/* =============================================  here Responsive  ============================================= */
/* ====================  Dropdown List  --Start--  ==================== */
let menuListSublists = document.querySelectorAll(".menu__list_sublist");
if (menuListSublists.length > 0) {
	for (let index = 0; index < menuListSublists.length; index++) {
		const menuListSublist = menuListSublists[index];
		menuListSublist.addEventListener("click", function (e) {
			if (body.classList.contains("_mobile")) {
				if (!menuListSublist.classList.contains("_active")) {
					document.querySelectorAll(".menu__list_sublist").forEach((el) => {
						if (el.classList.contains("_active")) {
							el.classList.remove("_active");
						}
					});
					menuListSublist.classList.add("_active");
				} else {
					menuListSublist.classList.remove("_active");
				}
			}
		});
	}
}
/* ====================  Dropdown List  --End--  ==================== */
/* ===================================  Menu Burger  --Start--  =================================== */
const body = document.querySelector("body");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
	menuBody.classList.contains('_active');
	menuBody.addEventListener("click", function (e) {
		if (!e.target.closest(".menu__list")) {
			body.classList.remove("_lock");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
		}
	});
}
/* ====================  Scrolling when Clicking on a data-goto=""  ==================== */
const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target.closest("[data-goto]");
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			if (iconMenu.classList.contains("_active")) {
				document.body.classList.remove("_lock");
				iconMenu.classList.remove("_active");
				menuBody.classList.remove("_active");
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}
/* ===================================  Menu Burger  --End--  =================================== */
/* =============================================  here Scroll Up Button  ============================================= */
/* =============================================  Default  --End--  ============================================= */