// events
const clearBtn = document.querySelector("#clear");
function onClear() {
  const itemList = document.querySelector("ul");
  const items = document.querySelectorAll("li");
  // method 1 : simply update content
  items.forEach((item, index) => {
    if (index === 1) {
      itemList.removeChild(item);
    }
  });
}
//  direct adding callback to element's api
clearBtn.onclick = () => alert("clear items");
// clear callback by reassign api to null
clearBtn.onclick = null;

// method 2 : add event listener
clearBtn.addEventListener("click", onClear);
// combine setTimeout with event listener, will execute after 2 seconds
function handleClear() {
  setTimeout(onClear, 2000);
}
clearBtn.addEventListener("click", handleClear);

setTimeout(() => clearBtn.removeEventListener("click", handleClear), 7000);

// ============================================
// mouse events
const logo = document.querySelector("img");
const onDoubleClick = () => {
  if (document.body.style.backgroundColor != "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

logo.addEventListener("dblclick", onDoubleClick); // double click
logo.addEventListener("click", onDoubleClick); // single click
logo.addEventListener("contextmenu", onDoubleClick); // onRightClick
logo.addEventListener("mousedown", onDoubleClick); // mosuse down
logo.addEventListener("mouseup", onDoubleClick); //mouse up
logo.addEventListener("wheel", onDoubleClick); // mouse wheel
logo.addEventListener("mouseover", onDoubleClick); // mouse over
logo.addEventListener("mouseout", onDoubleClick); //mouse out
logo.addEventListener("dragstart", onDoubleClick); // drag start
logo.addEventListener("drag", onDoubleClick); // onDrag
logo.addEventListener("dragend", onDoubleClick); // drag end
