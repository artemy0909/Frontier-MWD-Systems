'use strict';

let myMap;

ymaps.ready(function () {
    myMap = new ymaps.Map("YMapsID", {
        center: [43.76, 11.24],
        zoom: 3,
        controls: [],
    });

    myMap.behaviors.disable('scrollZoom');

    document.getElementById('russia_button').onclick = function () {
        myMap.panTo(
            [66.72, 93.96], {
                flying: true,
            }
        );
        addClassToElement('map__navigation_line','map__navigation_line_animation');
        addClassToElement('map__navigation_world','map__navigation_world_animation');
        addClassToElement('map__navigation_russia','map__navigation_russia_animation');
    };

    document.getElementById('world_button').onclick = function () {
        myMap.panTo(
            [43.76, 11.24], {
                flying: true,
            }
        );
        removeClassFromElement('map__navigation_line','map__navigation_line_animation');
        removeClassFromElement('map__navigation_world','map__navigation_world_animation');
        removeClassFromElement('map__navigation_russia','map__navigation_russia_animation');
    };

});
