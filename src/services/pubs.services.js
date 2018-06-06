import moment from "moment";
import pubs from "../mocks/pubs";
import {Beer} from "../class/Beer";
import {OpenHour} from "../class/OpenHour";
import {Owner} from "../class/Owner";
import {Pub} from "../class/Pub";

function allPubs() {
    var bars = makePubsArrayFromJSON(pubs);

    return bars;
}

function pubsOpenedToday() {
    var day = moment().format("dddd");
    var pubsDay = pubs.filter(pub => pub.openDays.includes(day) == true);
    var barsByDay = makePubsArrayFromJSON(pubsDay);

    return barsByDay;
}

function makePubsArrayFromJSON(jsonPubsArrray) {
    var pubsArray = [];

    jsonPubsArrray.forEach(pub => {
        var owner = new Owner(pub._owner._firstName, pub._owner._lastName, pub._owner._mail);

        //Cette fonction est aussi appelée pour créer des pubs à partir du localStorage
        //donc dans ce cas les propriétés beers, opendays et openhour ne seront pas définies
        //ce qui causera une nullPointerException si on essaye de lire leurs propriétés
        var bieres = [];
        if (pub._beers != null) {
            pub._beers.forEach(beer => {
                var biere = new Beer(beer._type, beer._name);
                bieres.push(biere);
            });
        }

        var opendays = null
        if (pub._openDays != null) {
            opendays = pub._openDays;
        }

        var openhour = null
        if (pub._openHours != null) {
            openhour = new OpenHour(pub._openHours._start, pub._openHours._end);
        }

        var bar = new Pub(pub._name, owner, opendays, openhour, bieres);
        pubsArray.push(bar);
    });

    return pubsArray;
}

export default {
    allPubs,
    pubsOpenedToday,
    makePubsArrayFromJSON
}