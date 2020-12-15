////ANIMATION OF APPEAR
export function animOfAppear() {
  const animItems = document.querySelectorAll('.an-i');
  //условие проверки наличия на странице объектов с классом '._an-i'
  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      //цикл 'for' наделяет объекты в массиве объектов переменными и определяет их текущий класс
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 3;

        //создание точки анимации, при значении animStart = 4, точка анимации - при 1/10 высоты объекта
        let animItemPoint = window.innerHeight - animItemHight / animStart;

        //проверка, если анимированный объект выше высоты окна браузера
        if (animItemHight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        //Добавление или удаление класса '__active' объекту
        if ((pageYOffset > animItemOffset - animItemPoint)
          &&
          pageYOffset < (animItemOffset + animItemHight)) {
          animItem.classList.add('an-a');
        } else {
          //доп условие: при отсутсвии класса-заглушки повтора анимации '__active' не будет снят
          if (!animItem.classList.contains('an-s')) {
            animItem.classList.remove('an-a');
          }
        }
      }
    }

    //функциия позволяет получить позицию объекта относительно верха или левой стороны объекта window
    function offset(e1) {
      const rect = e1.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    //вызов функции для объектов, которые находятся изначально при загрузке страницы с задержкой 300ms
    setTimeout(() => {
      animOnScroll()
    }, 300);
  }
}