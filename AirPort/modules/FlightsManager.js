const log = require("@ajar/marker");
const {EventEmitter} = require("events");
const moment = require("moment");
const Flight = require("./Flight");

class FlightManager{
    constructor(){
        this._counter = 0;
        this._destinations = [];
    }
    
    get counter(){return this._counter}
    set counter(v){throw new Error("Cannot set counter")}

    get destinations(){return this._destinations}
    set destinations(v){throw new Error("Cannot set destinations")}

    createFlight(data){
        this._counter++;
        if(this._destinations.includes(data.destination) === false){
            this._destinations.push(data.destination);
        }
        return new Flight(data);
    }
}

module.exports = FlightManager;
