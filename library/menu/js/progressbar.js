/* ===================================  Progress Bar  --Start--  =================================== */
const progress = document.querySelector(".progress");
window.addEventListener("scroll", progressBar)
function progressBar() {
    let windowScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.body.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScrollTop / windowHeight * 100;
    progress.style.width = percent + "%";
}
/* ===================================  Progress Bar  --End--  =================================== */