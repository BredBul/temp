/* ===================================  Activating the Menu When Scrolling  --Start--  =================================== */
/* ===================================  class="_section__block"  =================================== */
function activeMenuLink() {
	window.addEventListener("scroll", function () {
		if (screen.width > 250) {
			const scrollDistance = window.scrollY + document.querySelector(".header").offsetHeight;
			document.querySelectorAll("._section__block").forEach((el, l) => {
				if (el.offsetTop <= scrollDistance) {
					document.querySelectorAll(".menu__link").forEach((el) => {
						if (el.classList.contains("_activeLink")) {
							el.classList.remove("_activeLink");
						}
					});
					document.querySelectorAll(".menu__link")[l].classList.add("_activeLink");
				}
			});
		}
	});
}
activeMenuLink();
/* ===================================  Activating the Menu When Scrolling  --End--  =================================== */