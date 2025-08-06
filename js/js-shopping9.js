// event object's properties
const logo = document.querySelector("img");
logo.addEventListener("click", function (e) {
  console.log(e.clientX);
  console.log(e.currentTarget);
});

// target - the element that triggered the event
// currentTarget - the element that is currently handling the event
// type - event type
// timeStamp - timestamp of the event tiggered
// clientX - x position of the mouse click relative to window
// clientY - y position of the mouse click relative to window
// offsetX - x position of the mouse click relative to element
// offsetY - y position of the mouse click relative to element
// pageX - x position of the mouse click relative to page
// pageY - y position of the mouse click relative to page
// screenX - x position of the mouse click relative to screen
// screenY - y position of the mouse click relative to screen

// prevent browser default behavior
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("a Link was clicked");
});

function onDrag(e) {
  document.querySelector("h1").textContent = `X: ${e.clientX} Y: ${e.clientY}`;
}

logo.addEventListener("drag", onDrag);

// =====================================
// keyboard events
const itemInput = document.getElementById("item-input");
// key press
const onKeyPress = (e) => console.log("keypress");
itemInput.addEventListener("keypress", onKeyPress);
// key up
const onKeyUp = (e) => console.log("key up");
itemInput.addEventListener("keyup", onKeyUp);

// key down
const onKeyDown = (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    console.log("enter was pressed");
  }
  if (e.code === "Digit1") {
    console.log("you presse 1");
  }
  if (e.repeat) {
    console.log("you are holding down " + e.key);
  }
  console.log("Shift:" + e.shiftKey);
  console.log("Control:" + e.ctrlKey);
  console.log("Alt:" + e.altKey);
  if (e.shiftKey && e.key === "K") {
    console.log("you pressed shift and k");
  }
};
itemInput.addEventListener("keydown", onKeyDown);
