//высоту header добавляем в паддинг родительскому элементу
const headerNode = document.querySelector("header");
const headerHeight = headerNode.offsetHeight;
headerNode.parentNode.style.paddingTop = headerHeight + "px";

//ссылки навигации, прокрутка при клике
const menuLinks = document.querySelectorAll(".menu__link");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    aLinkGoto = menuLink.querySelector("a[data-goto]");
    const gotoClass = aLinkGoto.dataset.goto;
    const gotoBlock = document.querySelector(gotoClass);

    // единичку добавил в конце, чтоб убрать зазор после header
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top + scrollY - headerHeight + 1;

    menuLink.addEventListener("click", (e) => {
      e.preventDefault();

      // если было активно меню бургер делаем неактивным
      if (burger.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burger.classList.remove("_active");
        menuBody.classList.remove("show");
      }

      window.scrollTo({ top: gotoBlockValue, behavior: "smooth" });
    });
  });
}

// burger
const burger = document.querySelector(".menu-burger");
const menuBody = document.querySelector(".menu-body");
if (burger && menuBody) {
  burger.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    menuBody.classList.toggle("show");
  });
}

//=========================================

//отменяем стандартное поведение ссылок
// const aTagMenuLinks = document.querySelectorAll("a[data-goto]");
// aTagMenuLinks.forEach((aTagMenuLink) => {
//   aTagMenuLink.addEventListener("click", (e) => {
//     e.preventDefault();
//   });
// });

//=========================================

// const emptyBlocks = document.querySelectorAll(".empty");
// console.log("emptyBlocks =", emptyBlocks);

// console.log("burger =", burger);
// const lines = document.querySelectorAll(".burger__line");

// function toggleBurger() {
//   lines.forEach((line) => line.classList.toggle("active"));
// }
