import moment from "moment";
import pubs from "../mocks/pubs";
import {Beer} from "../class/Beer";
import {OpenHour} from "../class/OpenHour";
import {Owner} from "../class/Owner";
import {Pub} from "../class/Pub";

function allPubs() {
    var bars = initPubsArray(pubs);

    return bars;
}

function pubsOpenedToday() {
    var day = moment().format("dddd");
    var pubsDay = pubs.filter(pub => pub.openDays.includes(day) == true);
    var barsByDay = initPubsArray(pubsDay);

    return barsByDay;
}

<<<<<<< HEAD
//JSON typé
function initPubsArray(jsonPubsArrray) {
    var pubsArray = [];

    jsonPubsArray.forEach(pub => {
        console.log(pub);
        var owner = new Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);

            pub.beers.forEach(beer => {
                var biere = new Beer(beer.type, beer.name);
                bieres.push(biere);
            });

            opendays = pub.openDays;
            openhour = new OpenHour(pub.openHours.start, pub.openHours.end);

        var bar = new Pub(pub._name, owner, opendays, openhour, bieres);
=======
function makePubsArrayFromJSON(jsonPubsArrray){
    var pubsArray = [];

    jsonPubsArrray.forEach(pub => {
        var owner = new Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);

        var bieres = [];
        pub.beers.forEach(beer => {
            var biere = new Beer(beer.type, beer.name);
            bieres.push(biere);
        });

        var opendays = pub.openDays;

        var openhour = new OpenHour(pub.openHours.start, pub.openHours.end);

        var bar = new Pub(pub.name, owner, opendays, openhour, bieres);
>>>>>>> parent of ec50e84... Fin TP IHM
        pubsArray.push(bar);
    });

    return pubsArray;
}

<<<<<<< HEAD
//JSON non typé
function makePubsArrayFromJSON(jsonPubsArrray){
    //Cette fonction est aussi appelée pour créer des pubs à partir du localStorage
    //donc dans ce cas les propriétés beers, opendays et openhour ne seront pas définies
    //ce qui causera une nullPointerException si on essaye de lire leurs propriétés

    var pubsArray = [];
    if(jsonPubsArrray != null)
    {
        jsonPubsArray.forEach(pub => {
            var owner = new Owner(pub._owner._firstName, pub._owner._lastName, pub._owner._mail);
    
                if(pub._beers != null)
                {
                    pub._beers.forEach(beer => {
                        var biere = new Beer(beer._type, beer._name);
                        bieres.push(biere);
                    });
                }
                
                var opendays = null;
                if(pub._openDays != null)
                {
                    opendays = pub._openDays;
                }
                
                var openhour = null;
                if(pub._openHours != null)
                {
                    openhour = new OpenHour(pub._openHours.start, pub._openHours.end);
                }
                
            var bar = new Pub(pub._name, owner, opendays, openhour, bieres);
            pubsArray.push(bar);
        });
    }

    return pubsArray;
}

export default {
    allPubs,
    pubsOpenedToday,
    makePubsArrayFromJSON
=======
export default { 
    allPubs, 
    pubsOpenedToday 
>>>>>>> parent of ec50e84... Fin TP IHM
}