const menuBtn = document.querySelector("#menu");
const menuBar = document.querySelector(".menu-bar");
const closeMenuBtn = document.querySelector("#close-menu-bar-btn");
const overlay = document.querySelector(".overlay");
const wrapper = document.querySelector(".wrapper");

const onOffMenu = () => {
  menuBar.classList.toggle("open-menu");
  overlay.classList.toggle("open-overlay");
  wrapper.classList.toggle("blur");
};

menuBtn.addEventListener("click", onOffMenu);
closeMenuBtn.addEventListener("click", onOffMenu);
