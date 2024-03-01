import * as L from "leaflet";
import "leaflet.markercluster";

// Initialize the map
const map = L.map("map").setView([0, 0], 2);

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Create individual markers
// const marker1 = L.marker([40.7128, -74.006]).bindPopup("Marker 1");
// const marker2 = L.marker([34.0522, -118.2437]).bindPopup("Marker 2");
// const marker3 = L.marker([51.5074, -0.1278]).bindPopup("Marker 3");

// Create marker cluster
const markers = L.markerClusterGroup({
  // iconCreateFunction: function (cluster) {
  //   return L.divIcon({ html: "<b>" + cluster.getChildCount() + "</b>" });
  // },
  showCoverageOnHover: false,
  zoomToBoundsOnClick: false,
  singleMarkerMode: true,
});

// Add additional markers to the cluster
const clusterMarker1 = L.marker([48.8566, 2.3522]).bindPopup(
  "Cluster Marker 1"
);
const clusterMarker2 = L.marker([48.8566, 2.3522]).bindPopup(
  "Cluster Marker 2"
);

// Create a new marker with custom HTML content
const customHtmlContent =
  "<h3>Custom Marker</h3><p>This is a custom HTML content inside the popup.</p>";
const customMarker = L.marker([45.4642, 9.19]).bindPopup(customHtmlContent);

markers.addLayer(clusterMarker1);
markers.addLayer(clusterMarker2);

markers.on("clusterclick", function (a) {
  // a.layer is actually a cluster
  console.log("cluster " + a.layer.getAllChildMarkers().length);
});

// Add markers to the map
// map.addLayer(marker1);
// map.addLayer(marker2);
// map.addLayer(marker3);
map.addLayer(markers);
map.addLayer(customMarker);
