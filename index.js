const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownList = document.querySelector(".dropdown-list").children;
console.log(dropdownList);
function toggle() {
  for (item of dropdownList) {
    console.log(item);
    if (item.style.display === "block") {
      item.style.display = "none";
    } else item.style.display = "block";
  }
}

dropdownToggle.addEventListener("click", toggle);
