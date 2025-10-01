const innerBoxes = document.querySelectorAll(".innerBox");
const position = innerBoxes.getBoundingClientRect();
innerBoxes.forEach(box => {
    let height = position.height;
    let width = position.width;
    box.addEventListener("click", function() {
        height = 180px;
        width = 180px;
    });
});