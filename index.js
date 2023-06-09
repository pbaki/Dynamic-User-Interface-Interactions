//code 1 - Dropdown menu js
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownList = document.querySelector(".dropdown-list").children;
function toggle() {
  for (item of dropdownList) {
    if (item.style.display === "block") {
      item.style.display = "none";
    } else item.style.display = "block";
  }
}

dropdownToggle.addEventListener("click", toggle);

//code 2 - Mobile menu js
const dropdownToggle2 = document.querySelector(".more");
const dropdownList2 = document.querySelector(".dropdown-list2").children;

function toggle2() {
  for (item of dropdownList2) {
    if (item.style.display === "block") {
      item.style.display = "none";
    } else item.style.display = "block";
  }
}

dropdownToggle2.addEventListener("click", toggle2);

dropdownToggle2.addEventListener("mouseover", () => {
  dropdownToggle2.firstElementChild.style.filter =
    "invert(77%) sepia(0%) saturate(309%) hue-rotate(135deg) brightness(85%) contrast(95%)";
  dropdownToggle2.lastElementChild.style.color = "#A5A5A5";
});

dropdownToggle2.addEventListener("mouseout", () => {
  dropdownToggle2.firstElementChild.style.filter =
    "invert(98%) sepia(3%) saturate(0%) hue-rotate(83deg) brightness(115%) contrast(92%)";
  dropdownToggle2.lastElementChild.style.color = "rgb(245, 245, 245)";
});

//code 3 - Image Slider
const leftArrow = document.getElementsByClassName("left-arrow")[0];
const rightArrow = document.getElementsByClassName("right-arrow")[0];
const catImages = document.querySelectorAll(".image");

catImages[2].style.opacity = "1";

leftArrow.addEventListener("click", () => {
  for (let i = 0; i < catImages.length; i++) {
    if (catImages[i].style.opacity === "1") {
      catImages[i].style.opacity = "0";
      if (i == 0) {
        catImages[4].style.opacity = "1";
      } else {
        catImages[i - 1].style.opacity = "1";
      }
      break;
    }
  }
});
rightArrow.addEventListener("click", () => {
  for (let i = 0; i < catImages.length; i++) {
    if (catImages[i].style.opacity === "1") {
      catImages[i].style.opacity = "0";
      if (i == 4) {
        catImages[0].style.opacity = "1";
      } else {
        catImages[i + 1].style.opacity = "1";
      }
      break;
    }
  }
});

const circles = document.querySelectorAll(".select-circle");

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", () => {
    for (image of catImages) {
      image.style.opacity = "0";
    }
    catImages[i].style.opacity = "1";
  });
}

function advanceSlide() {
  for (let i = 0; i < catImages.length; i++) {
    if (catImages[i].style.opacity === "1") {
      catImages[i].style.opacity = "0";
      if (i == 4) {
        catImages[0].style.opacity = "1";
      } else {
        catImages[i + 1].style.opacity = "1";
      }
      break;
    }
  }
}

setInterval(advanceSlide, 5000);
