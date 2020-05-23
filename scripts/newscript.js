// скрипт для формы заказа и комментария

let orderForm = document.querySelector('.order-form'); //не знаю, зачем, но пусть будет
let textArea = document.querySelector('.text-area');
let counter = document.querySelector('.text-area-counter');
let countNumber = document.getElementById('0');
let submit = document.querySelector('.submitbutton');

textArea.onclick = function () {
    counter.classList.add('text-area-counter-visible');
};

textArea.oninput = function () { //отображение количества введенных символов вместе с пробелом

    countNumber.textContent = textArea.value.length;

    if (textArea.value.length > 142) {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
}