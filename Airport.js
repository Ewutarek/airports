class Airport
{
    constructor({airport_name})
    {
        this.airport_name = airport_name
        this.planes = []
    }

    landPlanes(plane)
    {
        this.planes.push(plane)
    }
}

module.exports = Airport