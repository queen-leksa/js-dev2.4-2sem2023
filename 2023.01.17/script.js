let n = 0;
// let w;
let span = 70;
let start = 0;
let store = [];
function getNumber(a,b) {
    return Math.floor(Math.random() * (a - b) + b);
}
function getColor() {
    return `rgb(${getNumber(256, 0)},${getNumber(256, 0)},${getNumber(256, 0)})`;
}
function clk() {
    console.log(`click ${++n} times`);
}
function show() {
    // window.open("https://wikipedia.org", null, "width=300,height=200")
    start += span;
    let w = window.open("", "", `width=300,height=200,top=100,left=${start}`);
    w.document.write(`<body style="background-color: ${getColor()}"></body>`)
    store.push(w);
}
function hide() {
    let w = store.pop();
    if (w) {
        w.close()
    }
}
function move() {
    let w = store[store.length - 1];
    if (w) {
        // w.moveBy(100, 50)
        // Поместить окно в центре экрана
        let x = (screen.width - w.outerWidth) / 2;
        let y = (screen.height - w.outerHeight) / 2;
        w.moveTo(x, y);
    }
}
function resize() {
    let w = store[store.length - 1];
    if (w) {
        let x = getNumber(screen.width, 100);
        let y = getNumber(screen.height, 100);
        w.resizeTo(x, y);
        move();
    }
}