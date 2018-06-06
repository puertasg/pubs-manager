import pubService from "./services/pubs.services";
import {Owner} from "./class/Owner";
import {Pub} from "./class/Pub";

var pubs = [];

//Vérifie si on a pas la liste des pubs dans le localStorage
if (!window.localStorage.getItem('pubs')) {
    //Récupération à partir des données mock
    var pubsJSON = pubService.pubsOpenedToday();
    pubs = pubService.makePubsArrayFromJSON(pubsJSON);
    //Enregistre dans le localStorage
    window.localStorage.setItem('pubs', JSON.stringify(pubs));
} else {
    //Récupère la liste des pubs depuis le localStorage, le parse en JSON puis en tableau de Pub
    var pubsJSON = JSON.parse(window.localStorage.getItem('pubs'));
    pubs = pubService.makePubsArrayFromJSON(pubsJSON);
}

var pubs = pubService.pubsOpenedToday();
var liste = document.getElementById("listePubs");
pubs.forEach(pub => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Le pub " + pub.name + " appartient à " + pub.owner.firstName + " " + pub.owner.lastName));
    liste.appendChild(li);
});