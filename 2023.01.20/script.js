const fun = () => {
    let per = 50;
    let w = window.open("", "", "width=400,height=401,top=100,left=100");
    let content = `
        <!doctype html>
        <html>
            <head>
                <title>Fun</title>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        flex-wrap: wrap;
                        align-content: flex-start;
                        height: 100vh;
                    }
                    .box {
                        width: ${per}%;
                        height: ${per}%;
                    }
                </style>
            </head>
            <body>`
    let n = 100 / per;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            content += `<div class="box" style="background: ${getColor()}"></div>`
        }
    }
    content += "</body></html>"
    w.document.write(content);
}

/*
* DOM
* document.body
* document.childNodes - список дочерних узлов
*
* firstChild - первый дочерний узел
* lastChild - последний дочерний узел
* nextSibling - следующий узел (младший брат)
* previousSibling - предыдущий узел (старший брат)
* parentNode - родительский узел
* */

console.log(document.body.childNodes[1])
