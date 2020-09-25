class Plane
{
    constructor()
    {
        // this.destination = undefined
        // this.location = undefined
        this.passengers = []
    }

    setDestination(destination) {
        this.destination = destination
    }
    setLocation(location) {
        this.location = location
    }

    boardPassengers(passenger)
    {
        this.passengers.push(passenger)
    }
}

module.exports = Plane