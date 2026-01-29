const ol = document.querySelector("#infi-list");
let i = 1;

// initial items
for (let j = 0; j < 10; j++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i++}`;
  ol.append(li);
}

function addItems() {
  for (let j = 0; j < 2; j++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i++}`;
    ol.append(li);
  }
}

// 👇 SCROLL ON CONTAINER
ol.addEventListener("scroll", () => {
  if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight - 5) {
    addItems();
  }
});
