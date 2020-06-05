let firstContainer = document.querySelector('.variableContainer');
let containerWide = document.querySelector('.containerWide');
let containerNarrow = document.querySelector('.containerNarrow');

let bottles = document.querySelector('.bottles');
let newThings = document.querySelectorAll('.new-thing');

// console.log('высота содержимого вместе с полями padding, но без полосы прокрутки: '+bottles.clientHeight);
// console.log('ыыы: '+bottles.clientWidth);

// пытаюсь убрать лишние border-left у элементов new-thing
if (bottles.clientWidth > 484){
  for (var i=0; i < newThings.length; i++) {
    if (i > 0 && i < newThings.length-1) {
      // newThings[i].style.backgroundColor = 'red';
      newThings[1].style.borderLeft = 'none';
    }
  }
}

//меняю контейнеры по разной ширине экрана
//знаю, что проще создать отдельный класс-контейнер со своими особыми паддингами под медиазапросы, да и если даже javascipt отвалится, то по приницпу graceful degradation.. потом сделаю, а сейчас - вот:
if (window.matchMedia("(max-width: 767.98px)").matches) {
  // firstContainer.classList.remove('containerNarrow');
  firstContainer.classList.toggle('containerWide');
  console.log('включен широкий контейнер');
} else if (window.matchMedia('(min-width: 767.98px)').matches) {
  firstContainer.classList.toggle('containerNarrow');
  console.log('включен узкий контейнер');
}
