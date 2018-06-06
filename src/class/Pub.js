export class Pub {
    constructor(name, owner, openDays, openHours, beers) {
        this._name = name;
        this._owner = owner;
        this._openDays = openDays;
        this._openHours = openHours;
        this._beers = beers;
    }

    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set owner(owner) {
        this._owner = owner;
    }

    get owner() {
        return this._owner;
    }

    set openDays(openDays) {
        this._openDays = openDays;
    }

    get openDays() {
        return this._openDays;
    }

    set openHours(openHours) {
        this._openHours = openHours;
    }

    get openHours() {
        return this._openHours;
    }

    set beers(beers) {
        this._beers = beers;
    }
}