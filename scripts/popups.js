/*скрипт для всплывающих окон на сайте, которые сообщают о нерабочем состоянии некоторых кнопок*/

let btns = document.querySelectorAll('.btn');
let popUps = document.querySelectorAll('.pop-up');

    for (let btn of btns) {

        btn.onclick = function () {

            let hintElement = document.createElement('div');//создаю пустой тег и объявляю его как переменную
            btn.append(hintElement);
            hintElement.classList.add('popup');
            hintElement.textContent = 'Кнопка не работает. Это просто статичный демонстрационный лендинг-пустышка без PHP, API и прочих свистоперделок. Закройте окошко, нажав на крестик, который появится при наведении мыши в правом верхнем углу. Спасибо за внимание.';
            let closeButton = document.createElement('div');
            hintElement.append(closeButton);
            closeButton.classList.add('popup-close');
            closeButton.textContent = 'x';

            closeButton.onclick = function () {
                btn.disabled = true;
                hintElement.classList.remove('popup');
                hintElement.textContent = '';
            }
        };
    };