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



var liste = document.getElementById("listePubs");
pubs.forEach(pub => {
    writePub(pub);
});

document.getElementById("savePub").onclick = function () {
    var nomPub = document.getElementById("inputNomPub").value;
    var nomOwner = document.getElementById("inputNomOwner").value;
    var prenomOwner = document.getElementById("inputPrenomOwner").value;
    var mailOwner = document.getElementById("inputMailOwner").value;

    var newOwner = new Owner(prenomOwner, nomOwner, mailOwner);
    var newPub = new Pub(nomPub, newOwner, null, null, null);

    writePub(newPub);
    pubs.push(newPub);

    //Enregistre la liste des pubs à jour dans le localStorage
    window.localStorage.setItem('pubs', JSON.stringify(pubs));
}

function writePub(pub) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(`Le pub ${pub.name} appartient à ${pub.owner.firstName} ${pub.owner.lastName}`));
    liste.appendChild(li);
}