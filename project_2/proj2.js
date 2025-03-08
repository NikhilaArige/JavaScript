// Select Elements
let openBtn = document.getElementById("open-button");
let modalContainer = document.querySelector(".modal-container");
let closeBtn = document.querySelector("#close-button");

// Open Modal
openBtn.addEventListener("click", function () {
    modalContainer.classList.add("active");
});

// Close Modal
closeBtn.addEventListener("click", function () {
    modalContainer.classList.remove("active");
});

// Close Modal When Clicking Outside
window.addEventListener("click", function (e) {
    if (e.target === modalContainer) {
        modalContainer.classList.remove("active");
    }
});
