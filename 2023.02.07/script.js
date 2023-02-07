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


