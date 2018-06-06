export class Owner {
    constructor(firstName, lastName, mail) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    get mail(){
        return this._mail;
    }

    set mail(mail){
        this._mail = mail;
    }
}