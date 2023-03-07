const sq = document.querySelector(".square");
const btn = sq.firstElementChild;

const changeBg = e => {
    // Останавливает события по умолчанию (ссылка больше не будет переходить на др страницу, форма обратной связи не отправится)
    e.preventDefault();
    if (e.currentTarget.nodeName === "A") {
        // Остановить эффект всплытия пузырька
        e.stopPropagation();
        e.currentTarget.style.backgroundImage = setGradient(30, "to right")
    } else {
        e.currentTarget.style.backgroundImage = setGradient(3)
    }
    console.log(e.currentTarget);
}
sq.addEventListener("click", changeBg);
btn.addEventListener("click", changeBg);
// document.body.addEventListener("click", changeBg);

const picEl = document.querySelector(".card__pic");
const textEl = document.querySelector(".card__content");

// const form = document.querySelector("form");
console.log(document.forms);
// Регистрация / Вход / Добавить отзыв / Форма заказа / задать вопрос
// const form = document.forms[0];
const form = document.forms.content;
console.log(form.children); // Все дочерние теги формы (прямые потомки)
console.log(form.elements); // Все управляющие элементы внутри формы (input / select / textarea / button)

form.addEventListener("submit", function(e) {
    e.preventDefault();
    for (let i = 0; i < this.elements.length; i++) {
        let el = this.elements[i];
        // if (el.localName !== "button") {
            // console.log(el);
            // console.log(el.value);
            // console.log(el.type);
            // console.log(el.placeholder);
        // }
        switch(el.name) {
            case "txt":
                textEl.innerHTML += textEl.innerText ? `<br>${el.value}` : el.value;
                break;
            case "pic":
                picEl.style.backgroundImage = el.value ? `url(${el.value})` : "none";
                break;
        }
    }
    console.log("Click form");
});
form.addEventListener("reset", function(e) {
    console.log("Clear form");
});