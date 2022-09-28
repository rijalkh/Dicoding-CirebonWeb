var backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 400) {
    backToTop.classList.add("show");

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  } else {
    backToTop.classList.remove("show");
  }
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "...more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "show less";
    moreText.style.display = "inline";
  }
}
