const box = document.querySelector(".cards");
const lb = document.querySelector(".lightbox");
const lbcl = lb.querySelector(".lightbox__close");
const lbn = lb.querySelector(".lightbox__next");
const lbp = lb.querySelector(".lightbox__prev");
/*
* .add("class")
* .remove("class")
* .contains("class")
* .toggle("class")
* */
const showCard = e => {
    // lb.className += " active";
    lb.classList.add("active");
    lb.style.backgroundImage = e.currentTarget.style.backgroundImage;
    lb.id = e.currentTarget.id;
}
lbcl.addEventListener("click", e => {
    // lb.className = lb.className.split(" ")[0];
    lb.classList.remove("active");
});
for (let i = 0; i < images.length; i++) {
    let img = images[i];
    let card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(images/${img})`;
    card.id = i;
    card.addEventListener("click", showCard);
    box.append(card);
}
const stepLeft = () => {
    let i = +lb.id;
    if (images[i + 1]) {
        lb.id = i + 1;
        lb.style.backgroundImage = `url(images/${images[i + 1]})`;
    } else {
        lb.id = 0;
        lb.style.backgroundImage = `url(images/${images[0]})`;
    }
}
const stepRight = () => {
    let i = +lb.id;
    if (images[i - 1]) {
        lb.id = i - 1;
        lb.style.backgroundImage = `url(images/${images[i - 1]})`;
    } else {
        lb.id = images.length - 1;
        lb.style.backgroundImage = `url(images/${images[images.length - 1]})`;
    }
}

lbn.addEventListener("click", stepLeft)
lbp.addEventListener("click", stepRight)

document.body.addEventListener("keydown", e => {
    if (lb.classList.contains("active")) {
        switch (e.key) {
            case "ArrowRight":
                stepRight();
                break;
            case "ArrowLeft":
                stepLeft()
                break;
            case "Escape":
                lb.classList.remove("active")
                break;
        }
    }
})