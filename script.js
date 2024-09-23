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
    
let marker = new L.Marker(
    [50.728109,1.609119],
    {
        'interactive': true,
    }
);


marker.addTo(map);

L.DomUtil.addClass(marker._icon, "test")


const marker1 = document.querySelector(".test")

marker1.addEventListener("click", (e) => {
    console.log("je fonctionne")
})

const data = {
    1: {
        "id" : 1,
        "name" : "Legrand",
        "firstname": "Aledorian",
        "city" : "Boulogne sur mer",
        "stack" : "HTML, CSS, JS, PHP",
        "hobbies" : "Arts, Jeux videos" 
    }, 
    2: {
        "id" : 2,
        "name" : "Doe",
        "firstname": "John",
        "city" : "Boulogne sur mer",
        "stack" : "HTML, CSS, JS, PHP",
        "hobbies" : "Arts, Jeux videos" 
    }   
}




