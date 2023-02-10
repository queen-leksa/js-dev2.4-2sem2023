function getNumber(a = 11, b = 0) {
    return Math.floor(Math.random() * (a - b) + b);
}

function getColor(a = 100) {
    return `rgba(${getNumber(256, 0)},${getNumber(256, 0)},${getNumber(256, 0)},${a/100})`;
}

function setGradient(col, dir = "", type = "linear") {
    // linear-gradient(#aaa, #44b)
    // linear-gradient(80deg, #aaa, #44b)
    // radial-gradient(circle, #abc, #def)
    const colors = typeof col === "number" ? [] : [...col];
    if (!colors.length) {
        while(col--) {
            colors.push(getColor(getNumber(101, 10)));
        }
    }
    let str = `${type}-gradient(`;
    if (dir) {
        str += dir + ",";
    }
    colors.forEach((c, i) => {
        str += c;
        if (i === colors.length - 1) {
            str += ")";
        } else {
            str += ",";
        }
    })
    console.log(str);
    return str;
}