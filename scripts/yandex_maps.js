ymaps.ready(function () {
    var myMap = new ymaps.Map("YMapsID", {
        center: [43.76, 11.24],
        zoom: 3,
        controls: []
    });
    myMap.behaviors.disable('scrollZoom');
});
