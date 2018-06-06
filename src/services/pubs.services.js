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
        pubsArray.push(bar);
    });

    return pubsArray;
}

export default { 
    allPubs, 
    pubsOpenedToday 
}