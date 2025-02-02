//высота header
const headerNode = document.querySelector("header");
headerNode.parentNode.style.paddingTop = headerNode.offsetHeight + "px";

//ссылки навигации, прокрутка при клике
const menuLinks = document.querySelectorAll("a[data-goto]");
// console.log("menuLinks = ", menuLinks);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", (e) => {
      // console.log(e);
      // console.log(menuLink);
      gotoBlock = document.querySelector(menuLink.dataset.goto);
      console.log("gotoBlock = ", gotoBlock);
    });
  });

  // function onMenuLinkClick(e) {

  // }
}

//=========================================
// const emptyBlocks = document.querySelectorAll(".empty");
// console.log("emptyBlocks =", emptyBlocks);

// burger
// const burger = document.querySelector(".menu-burger");
// console.log("burger =", burger);
// const lines = document.querySelectorAll(".burger__line");

// function toggleBurger() {
//   lines.forEach((line) => line.classList.toggle("active"));
// }

// burger.addEventListener("click", toggleBurger);
