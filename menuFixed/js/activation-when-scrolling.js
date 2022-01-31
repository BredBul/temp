/* ====================  Activation when Scrolling   --Start--  ==================== */
document.addEventListener('DOMContentLoaded', () => {
	let toTopBtn = document.querySelector('.up__button');
	let header = document.querySelector('.header');
	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			toTopBtn.classList.add("_active");
		} else {
			toTopBtn.classList.remove("_active");
		}
	}
});
/* ====================  Activation when Scrolling  --End--  ==================== */