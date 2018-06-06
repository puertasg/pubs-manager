export class Beer {
    constructor(type, name) {
        this._type = type;
        this._name = name;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name
    }
}