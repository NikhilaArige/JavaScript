// Select all accordion items
const accordionItems = document.getElementsByClassName('content-container');

for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}
