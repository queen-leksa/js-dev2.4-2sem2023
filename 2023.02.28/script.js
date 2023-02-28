const sq = document.querySelector(".square");
const changeBg = function() {
    sq.style.backgroundColor = getColor();
}
let n = 0;
const info = document.createElement("span");
sq.append(info);

// sq.onclick = function() {
//     info.innerText = `Clicked ${++n} times`;
//     // if (n >= 10) {
//     //     sq.removeEventListener("click", changeBg);
//     // }
// }

sq.addEventListener("click", changeBg, {once: true});
sq.addEventListener("click", function() {
    info.innerText = `Clicked ${++n} times`;
});
sq.addEventListener("click", (e) => {
    // e - event (само событие)
    console.log(e);
    //console.log(e.target); // Тег внутри квадрата, конкретно на который нажали
    //console.log(e.currentTarget); // Сам квадрат
    // console.log(e.shiftKey, e.ctrlKey, e.altKey, e.metaKey);
    if (e.shiftKey) {
        e.currentTarget.style.backgroundColor = getColor(50);
    }
});
const popup = document.createElement("div");
popup.className = "popup";
document.body.append(popup);

sq.addEventListener("mouseenter", function(e) {
    popup.style.opacity = "1";
    popup.innerText = `x: ${e.x}, y: ${e.y}`;
    popup.style.top = e.y + "px";
    popup.style.left = e.x + "px";
});
sq.addEventListener("mousemove", function(e) {
    popup.innerText = `x: ${e.x}, y: ${e.y}`;
    popup.style.top = e.y + "px";
    popup.style.left = e.x + "px";
});
sq.addEventListener("mouseleave", function(e) {
    popup.style.opacity = "0";
});

/* *
* События мыши:
* onclick - клик (нажать и отпустить левую кнопку мыши)
* onmousedown - зажать левую кнопку мыши
* onmouseup - отпустить левую кнопку мыши
* onmousemove - движение курсора
* onmouseover / mouseenter - наведение курсора
* onmouseout / mouseleave - убрать курсор с объекта
* ondblclick - двойное нажатие мыши
* oncontextmenu - нажатеи правой кнопки мыши
* */