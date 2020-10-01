/*скрипт для всплывающих окон на сайте, которые сообщают о нерабочем состоянии некоторых кнопок*/

let btns = document.querySelectorAll('.btn');
let submitButton = document.querySelector('.submitbutton');

function createElement(parentName, elementClassName, elementContent) {

    let element = document.createElement('div');
    parentName.append(element);
    element.classList.add(elementClassName);
    element.textContent = elementContent;

    return element;
}

for (let btn of btns) {

    btn.addEventListener('click', function() {

        let popup = createElement(btn, 'popup', 'Кнопка не работает. Это просто статичный демонстрационный лендинг-пустышка без PHP, API и прочих свистоперделок. Закройте окошко, нажав на крестик, который появится при наведении мыши в правом верхнем углу. Спасибо за внимание.');

        let closeButton = createElement(popup, 'popup-close', 'x');

        closeButton.onclick = function() { popup.remove(); btn.disabled = true; }

    });
};

function charCounter(charField) {
    document.getElementById('0').textContent = charField.value.length;
    charField.value.length > 142 ? submitButton.disabled = true : submitButton.disabled = false;
}