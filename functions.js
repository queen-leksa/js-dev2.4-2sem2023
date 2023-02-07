function getNumber(a, b) {
    return Math.floor(Math.random() * (a - b) + b);
}

function getColor(a = 100) {
    return `rgba(${getNumber(256, 0)},${getNumber(256, 0)},${getNumber(256, 0)},${a/100})`;
}