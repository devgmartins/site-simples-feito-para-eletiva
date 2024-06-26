const mobileBtn = document.querySelector("#mobileBtn");

mobileBtn.addEventListener("click", (e) => {
    const mobileMenu = document.querySelector("#mobileMenu");

    mobileMenu.classList.toggle("hide");
});
