/* ===================================  Preloader  --Start--  =================================== */
document.body.onload = function () {
	let screenWidth = window.innerWidth;
	let preloader = document.querySelector(".preloader");
	if (screenWidth > 250) {
		if (preloader) {
			document.body.classList.add("_lock");
			document.querySelector(".wrapper").classList.add("_done");
			setTimeout(function () {
				if (!preloader.classList.contains("_show")) {
					document.body.classList.remove("_lock");
					preloader.classList.add("_show");
					document.querySelector(".wrapper").classList.remove("_done");
				}
			},3000);
		}
	} else {
		preloader.classList.add("_show");
	}
} 
/* ===================================  Preloader  --End--  =================================== */