var boxes = document.querySelectorAll(".box")

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (boxes[i].innerHTML === '') {
            boxes[i].innerHTML = "X";
        } else if (boxes[i].innerHTML === 'X') {
            boxes[i].innerHTML = "O";
        } else if (boxes[i].innerHTML === "O") {
            boxes[i].innerHTML = '';
        }
    })
}

var button = document.querySelector("button");
button.addEventListener("click", function () {
    for (let box of boxes) {
        box.innerHTML = "";
    }
})