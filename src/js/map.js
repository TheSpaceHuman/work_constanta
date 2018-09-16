ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.915199, 37.796251],
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([55.915199, 37.796251], {
    hintContent: 'Наш офис',
    balloonContent: 'Московская область, г. Королев ул. Пионерская, д.1Б',
  }, {
    preset: 'islands#redDotIcon'
  });

  myMap.geoObjects.add(myPlacemark);
}