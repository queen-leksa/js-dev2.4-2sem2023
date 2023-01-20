function getNumber(a, b) {
    return Math.floor(Math.random() * (a - b) + b);
}

function getColor() {
    return `rgb(${getNumber(256, 0)},${getNumber(256, 0)},${getNumber(256, 0)})`;
}