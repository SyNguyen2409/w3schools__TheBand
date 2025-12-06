// 1. Header - Menu Mobile Button
const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".header__menu");
const headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    const isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
};
// Closing Menu Automatically
const menuItems = document.querySelectorAll('.nav li a[href*="#"]');
const moreBtn = document.querySelector(".js-more-btn");

mobileMenu.addEventListener("click", function () {
    if (header.style.overflow === "visible") {
        header.style.overflow = "hidden";
    } else {
        header.style.overflow = "visible";
    }
});
for (const menuItem of menuItems) {
    const isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains("subnav");
    menuItem.addEventListener("click", function (event) {
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
            header.style.overflow = "hidden";
            if (window.innerWidth > 768) {
                if (header.style.overflow === "hidden") {
                    header.style.overflow = "visible";
                } else {
                    header.style.overflow = "hidden";
                }
            }
        }
    });
}
// Reset Overflow on PC
function resetOverflowOnPc() {
    if (window.innerWidth > 768) {
        header.style.overflow = null;
    }
}
window.addEventListener("resize", resetOverflowOnPc);
window.addEventListener("DOMContentLoaded", resetOverflowOnPc);

// 2. Modal Buttons
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const closeModal = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function showBuyTickets() {
    modal.classList.add("open");
}
function removeBuyTickets() {
    modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showBuyTickets);
}
closeModal.addEventListener("click", removeBuyTickets);
modal.addEventListener("click", removeBuyTickets);
modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});
