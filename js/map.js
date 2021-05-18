ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("myMap", {
    center: [8.012417, 98.295894],
    zoom: 15,
    controls: [],
  });
  myMap.controls.add("zoomControl", {
    position: {
      top: "10px",
      left: "10px",
    },
    size: "small",
  });
  myMap.controls.add("fullscreenControl");
  var placemark = new ymaps.Placemark([8.012417, 98.295894]);
  myMap.geoObjects.add(placemark);
}
