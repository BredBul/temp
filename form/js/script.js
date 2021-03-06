/* ====================  Strict regime  ==================== */
'use strict';
/* =============================================  Default  --Start--  ============================================= */
/* =============================================  here PRELOADER  ============================================= */
/* =============================================  Meta Viewport Adaptation for a mobile device  --Start--  ============================================= */
function minWindowScreen250() {
	let screenWidth = screen.width;
	let metaViewport = document.getElementById("metaViewport");
	if (screenWidth < 250) {
		document.body.classList.add("_minWindowScreen250");
		metaViewport.setAttribute("content", "width=1200");
	} else {
		document.body.classList.remove("_minWindowScreen250");
		metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
	}
}
minWindowScreen250();
/* =============================================  Meta Viewport Adaptation for a mobile device  --End--  ============================================= */
/* ===================================  Identify Computer or Mobile  --Start--  =================================== */
function define–°omputerOrMobile() {
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
define–°omputerOrMobile();
/* ===================================  Identify Computer or Mobile  --End--  =================================== */
/* ====================  Checking the screen resizing  --Start--  ==================== */
window.addEventListener("resize", function () {
	/* ====================  Launching Functions  --Start--  ==================== */
	define–°omputerOrMobile();
	minWindowScreen250();
	/* ====================  Launching Functions  --End--  ==================== */
});
/* ====================  Checking the screen resizing  --End--  ==================== */





// –ö–ĺ–Ĺ—ā–į–ļ—ā
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	form.addEventListener("submit", formSend);
	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		let formData = new FormData(form);
		formData.append("image", formImageInput.files[0]);
		if (error === 0) {
			form.classList.add("_sending");
			let response = await fetch("../sendmail.php", {
				method: "POST",
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = "";
				form.reset();
				form.classList.remove("_sending");
			} else {
				alert("–ě—ą–ł–Ī–ļ–į");
				form.classList.remove("_sending");
			}		
		} else {
			alert("–ó–į–Ņ–ĺ–Ľ–Ĺ–ł—ā–Ķ –ĺ–Ī—ä—Ź–∑–į—ā–Ķ–Ľ—Ć–Ĺ—č–Ķ –Ņ–ĺ–Ľ—Ź");
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req");
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
			if (input.classList.contains("_email")) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
			} else {
				if (input.value === "") {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add("_error");
		input.classList.add("_error");
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove("_error");
		input.classList.remove("_error");
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	// –ü–ĺ–Ľ—É—á–į–Ķ–ľ –ł–Ĺ–Ņ—É—ā file –≤ –Ņ–Ķ—Ä–Ķ–ľ–Ķ–Ĺ–Ĺ—É—é
	const formImageInput = document.getElementById("formImageInput");
	const filePrewiew = document.querySelector(".file__prewiew");
	const formPreviewBack = document.querySelector(".file__prewiew_back");
	// –ü–ĺ–Ľ—É—á–į–Ķ–ľ –ī–ł–≤ –ī–Ľ—Ź –Ņ—Ä–Ķ–≤—Ć—é –≤ –Ņ–Ķ—Ä–Ķ–ľ–Ķ–Ĺ–Ĺ—É—é
	const formPreviewImg = document.getElementById("formPreviewImg");

	// –°–Ľ—É—ą–į–Ķ–ľ –ł–∑–ľ–Ķ–Ĺ–Ķ–Ĺ–ł—Ź –≤ –ł–Ĺ–Ņ—É—ā–Ķ file
	formImageInput.addEventListener("change", () => {
		uploadFile(formImageInput.files[0]);
	});

	formPreviewBack.addEventListener("click", () => {
		formPreviewImg.innerHTML = "";
		filePrewiew.classList.remove("_active");
	});
	function uploadFile(file) {
		// –ü—Ä–ĺ–≤–Ķ—Ä—Ź–Ķ–ľ —ā–ł–Ņ —Ą–į–Ļ–Ľ–į
		if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
			alert("–†–į–∑—Ä–Ķ—ą–Ķ–Ĺ—č —ā–ĺ–Ľ–ļ–ĺ –ł–∑–ĺ–Ī—Ä–į–∂–Ķ–Ĺ–ł—Ź.");
			formImageInput.value = "";
			return;
		}
		// –ü—Ä–ĺ–≤–Ķ—Ä–ł–ľ —Ä–į–∑–ľ–Ķ—Ä —Ą–į–Ļ–Ľ–į (< 2 mb)
		if (file.size > 8 * 4024 * 4024) {
			alert("–§–į–Ļ–Ľ –ī–ĺ–Ľ–∂–Ķ–Ĺ –Ī—č—ā—Ć –ľ–Ķ–Ĺ–Ķ–Ķ 8 mb");
			return;
		}

		var reader = new FileReader();
		reader.onload = function (e) {
			formPreviewImg.innerHTML = `<img src="${e.target.result}" alt="img">`;
			filePrewiew.classList.add("_active");
		};
		reader.onerror = function (e) {
			alert("–ě—ą–ł–Ī–ļ–į");
		};
		reader.readAsDataURL(file);
	}
});



/* =============================================  Default  --End--  ============================================= */