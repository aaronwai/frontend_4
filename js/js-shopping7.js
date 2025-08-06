// js update css
// header
const text = document.querySelector("header");
// ul
const itemList = document.getElementById("item-list");
const items = itemList.querySelectorAll("li");
function run() {
  // method 1 : add css class to the element
  //   text.className = "card text-red";
  text.classList.add("card", "text-red");
  // method 2 : add css classes into classList - DOMTokenList
  itemList.classList.add("card", "text-red");
  // classList function : remove css class
  text.classList.remove("text-red");
  //   classList function : replace css class
  text.classList.replace("card", "text-red");
  // classList function : toggle function to keep the css state value
  text.classList.toggle("hidden");
  //   loop nodelist to update css by html style
  items.forEach((item, index) => {
    if (index === 1 || index === 3) {
      item.style.outline = "1px solid red";
    }
  });
}

document.getElementById("clear").onclick = run;
