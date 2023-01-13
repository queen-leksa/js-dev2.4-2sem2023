
const getStep = function(w, g) {
    let letter = "", result = "";
    letter = prompt("Введите букву для слова " + g);
    if (!letter) {
        return g;
    }
    letter = letter.trim(); // убрать пробельные символ в начале и конце строки
    letter = letter[0].toLowerCase() ;
    /*
        letter = "а"
        "арбуз"
        "-----"
        "а----"
        letter = "б"
        "а----"
        "а-б--"
    */
    for (let i = 0; i < g.length; i++) {
        // w.indexOf(letter) !== -1;
        // w.includes(letter);
        // let reg = new RegExp(letter, "i")
        // reg.text(w) // true || false
        // w.search(reg) !== -1;
        if (w[i] == letter) {
            result += letter;
        } else {
            result += g[i];
        }
    }
    g = result;
    if (g.includes("-")) {
        g = getStep(w, g);
    }
    return g;
}

const startGame = function() {
    let word = words[Math.floor(Math.random() * words.length)];

    let guess = "";
    let lettersCnt = word.length;
    while(lettersCnt--) {
        guess += "-";
    }
    guess = getStep(word, guess);
    if (confirm("Начать новую игру?")) {
        startGame();
    }
}