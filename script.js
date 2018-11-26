var currentLength = document.getElementById("myProgress").value;
var page1 = document.getElementById("Page1");
var page2 = document.getElementById("Page2");
var page3 = document.getElementById("Page3");
var page4 = document.getElementById("Page4");
var page5 = document.getElementById("Page5");

function step1Active() {
  page1.classList.remove("visible");
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  page2.classList.add("visible");
}
function step2Active() {
  page2.classList.remove("visible");
  page2.classList.add("hidden");
  page3.classList.remove("hidden");
  page3.classList.add("visible");
}
function step3Active() {
  page3.classList.remove("visible");
  page3.classList.add("hidden");
  page4.classList.remove("hidden");
  page4.classList.add("visible");
}
function step4Active() {
  page4.classList.remove("visible");
  page4.classList.add("hidden");
  page5.classList.remove("hidden");
  page5.classList.add("visible");
}

var stepArr = [step1Active, step2Active, step3Active, step4Active];

function startSurveyQ() {
  step1Active();
  increaseLength();
}

function ratingValueBtnClick() {
  console.log("step 2");
  step2Active();
  increaseLength();
}

function optionSelection() {
  console.log("step 3");
  step3Active();
  increaseLength();
}

function commentSubmit() {
  console.log("step 4");
  step4Active();
  increaseLength();
}

function clearAll() {
  console.log("final step");
  location.reload();
}

function increaseLength() {
  if (currentLength < 90) {
    currentLength += 25;
    document.getElementById("myProgress").value = currentLength;
    console.log(currentLength, currentLength / 25);
    stepArr[currentLength / 25 - 1]();
  } else if (currentLength > 90 && currentLength < 100) {
    currentLength == 100;
    document.getElementById("myProgress").value = currentLength;
  } else {
    //alert("You reached the maximum length of the progressbar!")
  }
  currentStep = currentLength / 25;
  if (currentStep > 3) {
    currentStep = 3;
  }
  console.log(currentStep);
  document.getElementById("stepNum").innerHTML = currentStep;
}

function decreaseLength(çurrentLength) {
  if (currentLength >= 25) {
    currentLength -= 25;
    document.getElementById("myProgress").value = currentLength;
  } else if (currentLength > 0 && currentLength < 25) {
    currentLength == 0;
    document.getElementById("myProgress").value == currentLength;
  } else {
    //alert("You reached the minimum length of the progressbar!")
  }
  currentStep = currentLength / 25;
  if (currentStep > 3) {
    currentStep = 0;
  }
  console.log(currentStep);
  document.getElementById("stepNum").innerHTML = currentStep;
  stepArr[currentStep]();
}

// function move() {
//   var elem = document.getElementById("myBar");
//   var width = 1;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + "%";
//     }
//   }
// }
