/*
    #accordion h3:hover {
        border-radius: 8px 8px 0 0;
    }
    #accordion h3:hover+p {
        padding: 10px;
        border-style: none solid solid solid;
        max-height: 100px;
        transition-property: max-height;
        transition-duration: 1s;
    }
* */

let acc = document.getElementById("accordion");
console.log(acc);
// acc.innerHTML = "=)"

acc.title = "this is FAQ block";
// acc.style = `background-color: green; padding: 20px`;
acc.style = `background-color: ${getColor(20)}; padding: 20px`;

let block = document.getElementsByClassName("wrapper")[0];
// console.log(block);
block.firstElementChild.innerText = "ЧАВО";

/* *
* document.getElementsByName("password");
* */

let captions = document.getElementsByTagName("h3");
console.log(captions);
// 1 Array.from(captions)
// 2 [].from(captions)
// [...captions].forEach(function(el, i) {
//     el.innerText = `${i + 1} ${el.innerText}`;
// });
// for (;0;) {}

function openAcc() {
    let flag = this.title;
    if (flag) {
        this.title = "";
    } else {
        this.title = "open";
    }
    if (this.title) {
        this.style = `border-radius: 8px 8px 0 0`;
        this.nextElementSibling.style = `
            padding: 10px;
            border-style: none solid solid solid;
            max-height: 100px;
            transition-property: max-height;
            transition-duration: 1s;
        `;
    } else {
        this.style = null;
        this.nextElementSibling.style = null;
    }
}

for (let i = 0; i < captions.length;) {
    let el = captions[i];
    el.innerText = `${++i} ${el.innerText}`;
    el.onclick = openAcc;
}

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.minHeight = innerHeight + "px";
document.body.style.backgroundImage = setGradient(6, "circle", "radial");

let images = [
    "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://images.squarespace-cdn.com/content/v1/5ca1ca66809d8e4c67c4eff5/1554107099415-6ZKSKVH666FFK127KFBQ/Test+logo+squarespace.png",
    "https://media.istockphoto.com/id/1213516345/photo/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-on-bright-yellow.jpg?s=612x612&w=0&k=20&c=ZwUftNZJvG91agYPwWPI286BeMCt5FUq2aMoxo8IjVE=",
    "https://easydrawingguides.com/wp-content/uploads/2022/01/realistic-dog-step-by-step-drawing-tutorial-step-10.png",
    "https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/Genshin-Impact-anime.jpg",
    "https://fiomio.ru/wp-content/uploads/2022/03/%D0%90%D0%BD%D0%B8%D0%BC%D1%8D-37.png"
];

let pic = images[getNumber(images.length)];
console.log(pic);

let ext = pic.split(".");

document.body.style.backgroundPosition = "center";

let grad = document.body.style.backgroundImage;
console.log(grad);
// document.body.style.backgroundImage = `url(${pic})`;
// document.body.style.backgroundSize = ext.includes("png") ? "contain" : "cover";
document.body.style.backgroundImage += `, url(${pic})`;
document.body.style.backgroundSize += ext.includes("png") ? ",contain" : ",cover";

document.body.style.backgroundImage = `url(${pic}), ${grad}`;
document.body.style.backgroundSize = ext.includes("png") ? "contain, cover" : "cover";