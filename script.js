const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let finished = false;

buttons.forEach((button) => {
button.addEventListener("click", () => {
const value = button.textContent.trim();

if (value. toUpperCase() === "C"  ||
 value.toUpperCase() === "AC") {
    display.value = "";
    finished = false;
    return;
} 
 if (value === "=") {
    try { 
        const expression = display.value
        .replace(/x/g, "*")
        .replace(/÷/g, "/");

     display.value = Function(
        '"use strict"; return (' + expression + ")"
     ) ();

     finished = true;
    } catch {
        display.value = "Error";
        finished = true;
    }
    return;
}

if (finished)   {
    if ("0123456789.".includes(value)) {
    display.value = "";
}

finished = false;
}

display.value += value;
});
});