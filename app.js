var btnTranslate = document.querySelector("#btnTranslate");

// btnTranslate.addEventListener("click", function clickHandler() {
//     console.log("Clicked");
// });

var inputDiv = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler);

function clickHandler () {
    outputDiv.innerText = "hakuna" + inputDiv.value + "matatatatatatatata";
    console.log("Clicked");
}
