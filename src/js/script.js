const emptyBlocks = document.querySelectorAll(".empty");
console.log("emptyBlocks =", emptyBlocks);

// burger
const burger = document.querySelector(".menu-burger");
console.log("burger =", burger);
// const lines = document.querySelectorAll(".burger__line");

function toggleBurger() {

  // lines.forEach((line) => line.classList.toggle("active"));
}

burger.addEventListener("click", toggleBurger);
