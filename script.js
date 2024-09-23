let mapContainer = document.querySelector("#my-map")
// Creating map options
let mapOptions = {
    center: [50.73029, 1.5954],
    zoom: 12,
}
    
// Creating a map object
let map = new L.map("my-map", mapOptions);
    
// Creating a Layer object
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
    minZoom: 10,
})
    
// Adding layer to the map
map.addLayer(layer);
    
let marker1 = new L.Marker(
    [50.728109,1.609119],
    {
        'interactive': true,
    }
);

let marker2 = new L.Marker(
    [50.952601,1.853471],
    {
        'interactive': true,
    }
);

marker1.addTo(map);
marker2.addTo(map);

L.DomUtil.addClass(marker1._icon, "mark1");
L.DomUtil.addClass(marker2._icon, "mark2");


const aledorian = document.querySelector(".mark1");
const florent = document.querySelector(".mark2");

florent.addEventListener("click", (e) => {
    document.querySelector('.popup').removeAttribute = "hidden"
})