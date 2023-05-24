$(document).ready(function ($) {
const boxes = document.querySelectorAll(".box");
const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 6) * 5;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show");
    });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes()
    });