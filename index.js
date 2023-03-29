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
console.log(dropdownToggle2);

function toggle2() {
  for (item of dropdownList2) {
    console.log(item);
    if (item.style.display === "block") {
      item.style.display = "none";
    } else item.style.display = "block";
  }
}

dropdownToggle2.addEventListener("click", toggle2);
