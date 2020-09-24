class Plane
{
    constructor({airport_dest})
    {
        this.airport_dest = airport_dest
        this.passengers = []
    }

    boardPassengers(passenger)
    {
        this.passengers.push(passenger)
    }
}

module.exports = Plane