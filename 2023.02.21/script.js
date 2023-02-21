const today = new Date();
const daysOfWeek = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
const months = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
const year = today.getFullYear(), month = today.getMonth();
const block = document.querySelector(".cdl");
function addDay(d, m, el) {
    const dayEl = document.createElement("div");
    dayEl.className = "cdl__day";
    dayEl.innerText = d.getDate();
    if (d.getMonth() !== m) {
        dayEl.style.opacity = ".2";
    }
    if (el) {
        el.append(dayEl);
    }
}
function drawMonth(y, m, parent) {
    const monthEl = document.createElement("div");
    monthEl.className = "month";
    const title = document.createElement("h4");
    title.innerText = months[m];
    monthEl.append(title);
    const firstOfMonth = new Date(y, m);
    const lastOfMonth = new Date(y, m + 1, 0);
    /* *
    * Какое января было понедельником?
    * Какое марта будет воскресеньем?
    * */
    let monday, sunday;
    let mDif = firstOfMonth.getDay() === 0 ? 6 : firstOfMonth.getDay() - 1;
    let sDif = lastOfMonth.getDay() === 0 ? 0 : 7 - lastOfMonth.getDay();
    monday = new Date(y, m, 1 - mDif);
    sunday = new Date(y, m + 1, sDif);
    // console.log(monday);
    // console.log(
    //     daysOfWeek[firstOfMonth.getDay()],
    //     daysOfWeek[lastOfMonth.getDay()]
    // );
    // console.log(sunday);
    for (let i = monday.getTime() / 1000;
         i <= sunday.getTime()  / 1000;
         i += 60 * 60 * 24) {
        let day = new Date(i * 1000);
        addDay(day, m, monthEl);
    }
    parent.append(monthEl)
}

for (let i = 0; i < months.length; i++) {
    drawMonth(year, i, block);
}



