let mapContainer = document.querySelector("#my-map")
const spans = document.querySelectorAll(".close");
const modals = document.querySelectorAll(".card");
// Creating map options
let mapOptions = {
    center: [50.73029, 1.5954],
    zoom: 10,
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


//Aledorian
let marker1 = new L.Marker(
    [50.728109,1.609119],
    {
        'interactive': true,
    }
);

//Florent
let marker2 = new L.Marker(
    [50.952601,1.853471],
    {
        'interactive': true,
    }
);

//Marine
let marker3 = new L.Marker(
    [50.725431,1.604434],
    {
        'interactive': true,
    }
);

//Phillipe
let marker4 = new L.Marker(
    [50.736526,1.596452],
    {
        'interactive': true,
    }
);

//Yohann
let marker5 = new L.Marker(
    [50.950875,1.847164],
    {
        'interactive': true,
    }
);

//Maxence
let marker6 = new L.Marker(
    [50.752665,2.250710],
    {
        'interactive': true,
    }
);

//Julie
let marker7 = new L.Marker(
    [50.725838,1.635567],
    {
        'interactive': true,
    }
);

//Sacha
let marker8 = new L.Marker(
    [50.823064,1.593386],
    {
        'interactive': true,
    }
);

//Terence
let marker9 = new L.Marker(
    [50.721403,1.616335],
    {
        'interactive': true,
    }
);

//Maryline
let marker10 = new L.Marker(
    [50.708734,1.578613],
    {
        'interactive': true,
    }
);

//Perrine
let marker11 = new L.Marker(
    [50.725896,1.615018],
    {
        'interactive': true,
    }
);

//Grégoire
let marker12 = new L.Marker(
    [50.654442,1.631108],
    {
        'interactive': true,
    }
);

//Remy
let marker13 = new L.Marker(
    [50.739444,2.303929],
    {
        'interactive': true,
    }
);

//Nico
let marker14 = new L.Marker(
    [50.639151,1.744758],
    {
        'interactive': true,
    }
);

let markers = [marker1, marker2, marker3,marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11, marker12, marker13, marker14]

markers.forEach(marker => {
    marker.addTo(map)
});

L.DomUtil.addClass(marker1._icon, "mark1");
L.DomUtil.addClass(marker2._icon, "mark2");
L.DomUtil.addClass(marker3._icon, "mark3");
L.DomUtil.addClass(marker4._icon, "mark4");
L.DomUtil.addClass(marker5._icon, "mark5");
L.DomUtil.addClass(marker6._icon, "mark6");
L.DomUtil.addClass(marker7._icon, "mark7");
L.DomUtil.addClass(marker8._icon, "mark8");
L.DomUtil.addClass(marker9._icon, "mark9")
L.DomUtil.addClass(marker10._icon, "mark10");
L.DomUtil.addClass(marker11._icon, "mark11");
L.DomUtil.addClass(marker12._icon, "mark12");
L.DomUtil.addClass(marker13._icon, "mark13");
L.DomUtil.addClass(marker14._icon, "mark14");

const aledorian = document.querySelector(".mark1");
const florent = document.querySelector(".mark2");
const marine = document.querySelector(".mark3");
const phillipe = document.querySelector(".mark4");
const yohann = document.querySelector(".mark5");
const maxence = document.querySelector(".mark6");
const julie = document.querySelector(".mark7");
const sacha = document.querySelector(".mark8");
const terence = document.querySelector(".mark9");
const maryline = document.querySelector(".mark10");
const perrine = document.querySelector(".mark11");
const gregoire = document.querySelector(".mark12");
const remy = document.querySelector(".mark13");
const nico = document.querySelector(".mark14");



const learners = [aledorian, florent, marine, phillipe, yohann, maxence, julie, sacha, terence, maryline, perrine, gregoire, remy, nico]


const showModal = (name) => {
    document.querySelector(('.'+name)).style.display = "block" 
}

const closeModal = (name) => {
    document.querySelector(('.'+name)).style.display = "none" 
}

    learners[0].addEventListener("click", function() {
        showModal("aledorian")
    });
    
    learners[1].addEventListener("click", function() {
        showModal("florent")
    })

    learners[2].addEventListener("click", function() {
        showModal("marine")
    })

    learners[3].addEventListener("click", function() {
        showModal("phillipe")
    })

    learners[4].addEventListener("click", function() {
        showModal("yohann")
    })

    learners[5].addEventListener("click", function() {
        showModal("maxence")
    })

    learners[6].addEventListener("click", function() {
        showModal("julie")
    })

    learners[7].addEventListener("click", function() {
        showModal("sacha")
    })

    learners[8].addEventListener("click", function() {
        showModal("terence")
    })

    learners[9].addEventListener("click", function() {
        showModal("maryline")
    })

    learners[10].addEventListener("click", function() {
        showModal("perrine")
    })

    learners[11].addEventListener("click", function() {
        showModal("gregoire")
    })

    learners[12].addEventListener("click", function() {
        showModal("remy")
    })

    learners[13].addEventListener("click", function() {
        showModal("nico")
    })


    spans[0].addEventListener("click", function() {
        closeModal("florent")
    });
    spans[1].addEventListener("click", function() {
        closeModal("aledorian")
    });
    spans[2].addEventListener("click", function() {
        closeModal("yohann")
    });
    spans[3].addEventListener("click", function() {
        closeModal("maxence")
    });
    spans[4].addEventListener("click", function() {
        closeModal("julie")
    });
    spans[5].addEventListener("click", function() {
        closeModal("sacha")
    });
    spans[6].addEventListener("click", function() {
        closeModal("terence")
    });
    spans[7].addEventListener("click", function() {
        closeModal("maryline")
    });
    spans[8].addEventListener("click", function() {
        closeModal("perrine")
    });
    spans[9].addEventListener("click", function() {
        closeModal("marine")
    });
    spans[10].addEventListener("click", function() {
        closeModal("phillipe")
    });
    spans[11].addEventListener("click", function() {
        closeModal("gregoire")
    });
    spans[12].addEventListener("click", function() {
        closeModal("remy")
    });
    spans[13].addEventListener("click", function() {
        closeModal("nico")
    });