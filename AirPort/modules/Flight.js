const moment = require("moment");
const {EventEmitter} = require("events");
const EventBoy = require("./Emitter");


function getRandomTime(){
    return 1000 + Math.round(Math.random()*4000);
    // return 1000;
}

class Flight{
    constructor({number,origin,destination}){
        this._number = number;
        this._origin = origin;
        this._destination = destination;
        this._departed = "";
        this._arrived = "";

        this._emitter = new EventBoy();
    }

    get number(){return this._number;}
    set number(v){this._number = v;}

    get origin(){return this._origin;}
    set origin(v){this._origin = v;}

    get destination(){return this._destination;}
    set destination(v){this._destination = v;}

    get departed(){return this._departed;}
    set departed(v){throw new Error("Cannot set departed outside of Flight class");}

    get arrived(){return this._arrived;}
    set arrived(v){throw new Error("Cannot set arrived outside of Flight class");}

    depart(){
        this._departed = moment().format("HH:mm:ss.SSS");
        setTimeout(() => this.arrive(),getRandomTime());

    }

    arrive(){
        this._arrived = moment().format("HH:mm:ss.SSS");
        this._emitter.fire("FLIGHT_ARRIVED",this);
    }

    on(event,func){
        this._emitter.on(event,func);
    }


}

module.exports = Flight;