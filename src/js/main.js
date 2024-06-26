const controls = document.querySelectorAll("button");
const items = document.querySelectorAll(".item");
const maxItems = items.length;

let currentItem = 0;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("previous");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach((item) => {
            item.classList.remove("current");

            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
            });
        });
    });
});
