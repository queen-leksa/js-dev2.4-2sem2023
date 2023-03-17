let fs = require("fs");

fs.readdir("./images", null, (err, result) => {
    // console.log(result);
    let txt = "let images = [";
    for (let img of result) {
        txt += `'${img}',`;
    }
    txt = txt.slice(0, txt.length - 1);
    txt += "]";
    fs.writeFile("./data.js", txt, "utf-8", err => {
        if (err) {
            console.log(err);
        }
    })
})