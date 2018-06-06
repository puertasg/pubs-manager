export class OpenHour {
    constructor(start, end) {
        this._start = start;
        this._end = end;
    }

    get start(){
        return this._start;
    }

    set start(start){
        this._start = start;
    }

    get end(){
        return this._end;
    }

    set end(end){
        this._end = end;
    }
}