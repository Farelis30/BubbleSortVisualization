const bars = document.getElementById("bars");

const array = [];

for (let i = 0; i < 55; i++) {
  array[i] = Math.floor(Math.random() * 100) + 50;
}

for (let i = 0; i < array.length; i++) {
  const bar = document.createElement("div");
  bar.classList.add("bar");
  bar.style.backgroundColor = "aquamarine";
  bar.style.margin = "0 2px";
  bar.style.width = "20px";
  bar.style.height = array[i] + "px";
  bar.style.transition = "height 0.2s";
  bar.style.borderRadius = "10px";
  bars.appendChild(bar);
}

console.log(array);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort() {
  var bars = document.querySelectorAll(".bar");
  var n = bars.length;

  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      var height1 = parseInt(bars[j].style.height);
      var height2 = parseInt(bars[j + 1].style.height);

      if (height1 > height2) {
        bars[j].style.backgroundColor = "orange";
        bars[j + 1].style.backgroundColor = "orange";

        await sleep(1); // Menunggu sebelum melakukan pertukaran

        bars[j].style.height = height2 + "px";
        bars[j + 1].style.height = height1 + "px";

        await sleep(1); // Menunggu setelah melakukan pertukaran

        bars[j].style.backgroundColor = "aquamarine";
        bars[j + 1].style.backgroundColor = "aquamarine";
      }
    }
  }
}
