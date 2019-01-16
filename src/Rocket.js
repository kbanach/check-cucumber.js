class Rocket {
    get speedInKmPerHour() { return 76800 };

    constructor() {
        this.isInSpace = false;
        this.boostersLanded = false;
        this.flightTime = -1;
    }

    launch(distance) {
        this.isInSpace = true;
        this.boostersLanded = true;

        if (distance) {
            this.flightDistance = distance;
            this.flightTime = this.calculateFlightTime(this.flightDistance);
        }
    }

    calculateFlightTime(distance) {
        return Math.round(distance / this.speedInKmPerHour);
    }

}

module.exports = Rocket;