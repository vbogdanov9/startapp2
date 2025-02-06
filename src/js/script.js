//высота header
const headerNode = document.querySelector("header");
const headerHeight = headerNode.offsetHeight;
headerNode.parentNode.style.paddingTop = headerHeight + "px";

//отменяем стандартное поведение ссылок

const aTagMenuLinks = document.querySelectorAll("a[data-goto]");
aTagMenuLinks.forEach((aTagMenuLink) => {
  aTagMenuLink.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//ссылки навигации, прокрутка при клике
const menuLinks = document.querySelectorAll(".menu__link");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      aLinkGoto = menuLink.querySelector("a[data-goto]");
      const gotoClass = aLinkGoto.dataset.goto;
      const gotoBlock = document.querySelector(gotoClass);

      // единичку добавил чтоб убрать зазор после header
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + scrollY - headerHeight + 1;

      window.scrollTo({ top: gotoBlockValue, behavior: "smooth" });
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
