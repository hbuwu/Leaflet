//Make markers

let LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'src/marker-shadow2x.png',
		iconSize:     [50, 82], // size of the icon
		shadowSize:   [82, 82], // size of the shadow
		iconAnchor:   [40, 82], // point of the icon which will correspond to marker's location
		shadowAnchor: [24, 76],  // the same for the shadow
		popupAnchor:  [-33, -80] // point from which the popup should open relative to the iconAnchor
    }
});

let blueIcon = new LeafIcon({iconUrl: 'src/marker-icon-blue2x.png'});
let redIcon = new LeafIcon({iconUrl: 'src/marker-icon-red2x.png'});
let yellowIcon = new LeafIcon({iconUrl: 'src/marker-icon-yellow2x.png'});
let greenIcon = new LeafIcon({iconUrl: 'src/marker-icon-green2x.png'});


//Make map

let mymap = L.map('mapid').setView([51.245004, 4.41647], 13);

let background = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaGJ1d3UiLCJhIjoiY2sxdnM1YmhxMDU4MDNibXAyNG9qZTA4NiJ9.mAIn5oXb7b_4bP7yLo2CHA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiaGJ1d3UiLCJhIjoiY2sxdnM1YmhxMDU4MDNibXAyNG9qZTA4NiJ9.mAIn5oXb7b_4bP7yLo2CHA'
})

background.addTo(mymap);

//Add markers to map

let markerBurgerKing = L.marker([51.245181, 4.415839], {icon: redIcon});
let markerBaiWei = L.marker([51.219902, 4.420665], {icon: greenIcon});
let marker8tea5 = L.marker([51.219033, 4.408189], {icon: blueIcon});

markerBurgerKing.addTo(mymap);
markerBaiWei.addTo(mymap);
marker8tea5.addTo(mymap);

markerBaiWei.bindPopup("Bai Wei Noodle Restaurant").openPopup();
marker8tea5.bindPopup("8tea5").openPopup();
markerBurgerKing.bindPopup("Burger King").openPopup();

//Current location

function onLocationFound(e) {
    let radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);