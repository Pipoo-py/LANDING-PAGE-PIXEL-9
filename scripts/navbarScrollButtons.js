const buttonScrollLeftNav = document.getElementById("leftScroll");
const buttonScrollRightNav = document.getElementById("rightScroll");
const navList = document.querySelector(".nav__list");

buttonScrollRightNav.addEventListener("click",()=> navList.scrollLeft -= -150);
buttonScrollLeftNav.addEventListener("click",()=> navList.scrollLeft -= 150);
