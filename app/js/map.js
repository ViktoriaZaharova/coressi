// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [59.902298, 30.320899],
        zoom: 10
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [59.902298, 30.320899] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер

        }, {
            iconImageHref: 'img/marker.svg',  // картинка иконки
            iconImageSize: [17, 25],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    // //Элементы управления
    // myMap.controls
    // // Кнопка изменения масштаба
    //     .add('zoomControl')
    //     // Список типов карты
    //     .add('typeSelector')
    //     // Кнопка изменения масштаба - справа
    //     .add('smallZoomControl', { right: 5, top: 75 })
    //     // Стандартный набор кнопок
    //     .add('mapTools')
    //     //Линейка масштаба
    //     .add(new ymaps.control.ScaleLine());
}