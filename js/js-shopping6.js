// a. insert adjacent element, insert once
function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.textContent = "h1 insert Adjacent Element";
  h2.textContent = "h2 insert Adjacent Element";
  // paste h1 above the filter element - beforebegin
  filter.insertAdjacentElement("beforebegin", h1);
  // paste h2 after the filter element - afterend
  filter.insertAdjacentElement("afterend", h2);
}

insertElement();

// b. insert adjacent text
function insertText() {
  const item = document.querySelector("li:nth-child(1)");
  //   insert text before the 'Apple'  - after begin
  item.insertAdjacentText("afterbegin", "insert Adjacent text");
  // insert text before the end of li , before the font - before end
  item.insertAdjacentText("beforeend", "insert Adjacent text");
}

insertText();
// c. insert adjacent html
function insertHtml() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("beforebegin", "<h2>insert adjacent html</h2>");
  clearBtn.insertAdjacentHTML("afterend", "<h2>insert adjacent html</h2>");
}

insertHtml();

// d. insertBefore(newItem, existing) nodeList
function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = "insert before item";
  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();

//e. custom made insertAfter() - Node
function insertAfter(newEl, existingEl) {
  existingEl.parentNode.insertBefore(newEl, existingEl.nextSibling);
}

const li = document.createElement("li");
li.textContent = "Insert Me after!";
const existingItem = document.querySelector("li:nth-child(5)");
insertAfter(li, existingItem);

// f. replaceWith() - node function
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");
  const newElement = document.createElement("li");
  newElement.textContent = "Replace First Item";
  firstItem.replaceWith(newElement);
}
replaceFirstItem();

// g. replaceChild() - node function, from parent apply to child
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");
  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Replace Shopping List";
  header.replaceChild(h2, h1);
}
replaceChildHeading();

// h. outerHTML - replace html component
function replaceAllItems() {
  const lis = document.querySelectorAll("li");
  lis.forEach((item, index) => {
    item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>Item</li>";
  });
}
replaceAllItems();

// i. remove() - node function
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

removeClearButton();

// j. removeChild() - node function
// a. template literal method
function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  //   string template literal
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

removeItem(2);
// b. node list index method, index start from 0
function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1];
  ul.removeChild(li);
}
removeItem2(2);
//c. node list direct remove element
function removeItem3(itemNumber) {
  document.querySelectorAll("li")[itemNumber - 1].remove();
  //   li[itemNumber - 1].remove();
}
removeItem3(1);
