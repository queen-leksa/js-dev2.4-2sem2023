const setCard = function(char, cnt) {
    return `<div class="card">
        <h2>${char}</h2>
        <p>${cnt}</p>
    </div>`;
}
const setContent = function(el, arr) {
    el.innerHTML = "";
    for (let v of arr) {
        el.innerHTML += setCard(v.char, v.cnt);
    }
}

let list = [];
for (let k in hash) {
    list.push({
        char: k,
        cnt: hash[k]
    });
}

const sortByChar = function() {
    list.sort((a, b) => {
        console.log(a, b);
        if (a.char > b.char) {
            return 1;
        } else {
            return -1;
        }
    });
    // console.log(list);
    setContent(block, list);
}
const sortToBig = function() {
    list.sort((a, b) => a.cnt - b.cnt);
    setContent(block, list)
}
const sortToSmall = function() {
    list.sort((a, b) => b.cnt - a.cnt);
    setContent(block, list);
}

const block = document.body.firstElementChild;

// console.log(block);
// console.log(setCard("j", 50));
// block.innerHTML = setCard("j", 50);

setContent(block, list);
