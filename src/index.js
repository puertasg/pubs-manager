import pubService from "./services/pubs.services";

var pubs = pubService.pubsOpenedToday();
var liste = document.getElementById("listePubs");
pubs.forEach(pub => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Le pub " + pub.name + " appartient à " + pub.owner.firstName + " " + pub.owner.lastName));
    liste.appendChild(li);
});