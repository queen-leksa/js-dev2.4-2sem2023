const monthNames = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
class Person {
    constructor(n, date) {
        this.name = n;
        this.birthday = new Date(date);
    }
    get monthOfBirth() {
        return monthNames[this.birthday.getMonth()];
    }
    get yearOfBirth() {
        return this.birthday.getFullYear();
    }
    get age() {
        return new Date().getFullYear() - this.yearOfBirth
    }
}

const human = new Person(
    names[getNumber(names.length)].name,
    dates[getNumber(dates.length)].birth
);

let block = document.getElementsByClassName("wrapper")[0];

// let card = document.createElement("div");
// card.className = "card";
// card.innerText = human.name;

// block.append(a,b,c,d,e);
// block.append(a);
// block.appendChild(card); // Добавить в самый конец родительского элемента

const createCard = (person, parent) => {
    let color = getColor();
    let card = document.createElement("div");
    card.className = "card";
    card.style.borderColor = color;
    let caption = document.createElement("h2");
    caption.innerText = person.name;
    let date = document.createElement("div");
    date.innerText = person.birthday.toLocaleDateString();
    date.style.color = color;
    card.append(caption, date);
    parent.appendChild(card);
    if (monthNames[new Date().getMonth()] === person.monthOfBirth) {
        card.style.backgroundColor = color;
        card.style.color = "#fff";
        date.style.color = "#fff";
    }
}

let persons = [];
let cnt = getNumber(31,1);
if (cnt % 4 === 0 && cnt !== 4) {
    block.style.gridTemplateColumns = "repeat(4, 120px)";
} else if (cnt % 3 === 0 && cnt !== 3) {
    block.style.gridTemplateColumns = "repeat(3, 120px)";
} else if (cnt % 5 === 0 && cnt !== 5) {
    block.style.gridTemplateColumns = "repeat(5, 120px)";
} else if (cnt <= 5) {
    block.style.gridTemplateColumns = "repeat(2, 120px)";
} else if (cnt === 1) {
    block.style.gridTemplateColumns = "120px";
}

while(cnt--) {
    persons.push(new Person(
        names[getNumber(names.length)].name,
        dates[getNumber(dates.length)].birth
    ))
}

persons.forEach(p => {
    createCard(p, block);
})