const fs = require('fs')
const path = require('path')
class Airport
{
    static airports =[]
    constructor({airport_name})
    {
        this.airport_name = airport_name
        this.planes = []
        this.constructor.airports.push(this)
    }
    

    landPlanes(plane)
    {
        plane.setLocation(this.airport_name)
        this.planes.push(plane)
    }

    takeOff(plane)
    {
        const index = this.planes.indexOf(plane)
        this.planes.splice(index,1)
        const destinantionAirport = Airport.airports.find(airport => airport.airport_name === plane.destination)
        destinantionAirport.landPlanes(plane)
    }

    getInfo(onInfo)
    {
        const airportName = this.airport_name
        const locationFile = path.join(__dirname, 'airportsData.json')
        const callback = function(err, buffer){
        const arrayOfAirports = JSON.parse(String(buffer))
           
           const result = arrayOfAirports.find(airport => airport.iata === airportName)
          onInfo(err,result)
        }
       fs.readFile(locationFile, callback) 
    }

    getInfoPromise()
    {
        return new Promise((resolve,reject) => {
      
            const airportName = this.airport_name
            const locationFile = path.join(__dirname, 'airportsData.json')
            const callback = function(err, buffer){
            const arrayOfAirports = JSON.parse(String(buffer))
               
               const result = arrayOfAirports.find(airport => airport.iata === airportName)
                resolve(result)
            }
            fs.readFile(locationFile, callback) 
        })
       
    }
}

module.exports = Airport