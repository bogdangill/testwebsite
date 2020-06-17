/*скрипт для всплывающих окон на сайте, которые сообщают о нерабочем состоянии некоторых кнопок*/

let btns = document.querySelectorAll('.btn-dis');
let btnSections = document.querySelectorAll('.whatsnewButtons');
let popUps = document.querySelectorAll('.pop-up');

    for (let btn of btns) {

        btn.onclick = function () { //обработчик событий при клике на кнопку

            let hintElement = document.createElement('div');//создаю пустой тег и объявляю его как переменную
            btn.append(hintElement);
            hintElement.classList.add('popup');
            hintElement.textContent = 'К величайшему сожалению, данная кнопка не работает по причине ленивости разработчика сайта, которому влом создавать отдельные страницы. (ведь это всего лишь учебный макет!) Проявите снисходительность и закройте этот чертов попап, жмакнув на крестик в правом верхнем углу. SPA рулит.';
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
