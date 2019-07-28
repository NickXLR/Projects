const log = require("@ajar/marker");
const {flights} = require("./data/flights.json");
const FlightManager = require("./modules/FlightsManager");
console.clear();

log.magenta("Start");

const manager = new FlightManager();

for (const data of flights) {
    const flight = manager.createFlight(data);
    flight.on("FLIGHT_ARRIVED",logFlight);
    flight.depart();
    log.red("Flight number "+flight.number+" left from "+flight.origin+" at "+flight.departed);
}

function logFlight(flight){
    log.green("Flight number "+flight.number+" arrived in " + flight.destination);
    log.blue("at " + flight.arrived);
}