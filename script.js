var pages = document.getElementsByClassName("page");
var currentPage = 1;
var maxPages = 5;

// var page1 = document.getElementById("Page1");
// var page2 = document.getElementById("Page2");
// var page3 = document.getElementById("Page3");
// var page4 = document.getElementById("Page4");
// var page5 = document.getElementById("Page5");

function showPage(number) {
  if (number < 1 || number > maxPages) {
    return;
  }

  Array.from(pages).forEach(function(e) {
    e.classList.add("hidden");
    e.classList.remove("visible");
  });

  document.getElementById("Page" + number).classList.remove("hidden");
  document.getElementById("Page" + number).classList.add("visible");
  currentPage = number;

  setBarLength();

  return false;
}

function clearAll() {
  console.log("final step");
  location.reload();
}

function goNext() {
  showPage(currentPage + 1);
}

function goPrevious() {
  showPage(currentPage - 1);
}

function setBarLength() {
  var length = Math.min((currentPage - 2) * 25, 75);
  var step = Math.min(currentPage - 2, 3);

  document.getElementById("myProgress").value = length;
  document.getElementById("stepNum").innerHTML = step;
}

Array.from(document.querySelectorAll("[data-click-to-step]")).forEach(function(
  e
) {
  var step = parseInt(e.getAttribute("data-click-to-step"));
  e.onclick = function(event) {
    event.preventDefault();
    showPage(step);
  };
});
