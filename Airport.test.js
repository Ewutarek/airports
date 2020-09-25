const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Airport = require('./Airport')





/*-------------------Test Planes-----------------------------------------*/
describe('Planes', function ()
{
    // test('Plane has a destinantion', function () 
    // {
    //     const plane1 = new Plane()
    //     const [DBLN,JHB] =  Airport.airports
    //     DBLN.landPlanes(plane1)
    //     expect(plane1.location).toBe('DBLN')
    // })

    test('Plane has passengers', () => 
    {
        const plane2 = new Plane({destination:"GATWICK"})
        const person1 = new Passenger({name:"John"})
        const person2 = new Passenger({name:"Katrina"})
        const person3 = new Passenger({name:"jane"})
        const person4 = new Passenger({name:"limpbzkit"})
        plane2.boardPassengers(person1)
        plane2.boardPassengers(person2)
        plane2.boardPassengers(person3)
        plane2.boardPassengers(person4)
        expect(plane2.passengers.length).toBe(4)
    })

    test('We can read of all passengers on plane', () => 
    {
        const plane2 = new Plane({destination:"GATWICK"})
        const person1 = new Passenger({name:"John"})
        const person2 = new Passenger({name:"Katrina"})
        const person3 = new Passenger({name:"jane"})
        const person4 = new Passenger({name:"limpbzkit"})
        const person5 = new Passenger({name:"Posh spice"})
        plane2.boardPassengers(person1)
        plane2.boardPassengers(person2)
        plane2.boardPassengers(person3)
        plane2.boardPassengers(person4)
    

        expect(plane2.passengers).toEqual([{"bags": [], "name": "John"}, {"bags": [], "name": "Katrina"}, {"bags": [], "name": "jane"}, {"bags": [], "name": "limpbzkit"}])
    })
})

/*--------------------Test Airports----------------------------------------*/
describe('Airport', function ()
{
    test('Airport has a name', function () 
    {
        const airport1 = new Airport({airport_name:"DBLN"})
        const airport2 = new Airport({airport_name:"JHB"})
        const airport3 = new Airport({airport_name:"LAX"})
        const airport4 = new Airport({airport_name:"LHR"})
        expect(airport1.airport_name).toBe("DBLN")
        expect(airport2.airport_name).toBe("JHB")
        expect(airport3.airport_name).toBe("LAX")
        expect(airport4.airport_name).toBe("LHR")

    })

    test('Airport has planes', () => 
     {  
        const plane1 = new Plane() //creating a plane that travels from DBLN to JHB
        const [airport1, airport2 ] = Airport.airports
        airport1.landPlanes(plane1)
        expect(plane1.location).toBe("DBLN")
        plane1.setDestination(airport2.airport_name)
        airport1.takeOff(plane1)
        expect(airport1.planes.length).toBe(0)
        expect(airport2.planes.length).toBe(1)

        /*----------------Transfer plane1 from JHB to LAX--------------------------*/ 
        // const [airport2, airport3] = Airport.airports
        // plane1.setDestination(airport3.airport_name)
        // airport3.takeOff(plane1)
        // expect(airport2.planes.length).toBe(0)
        // expect(airport3.planes.length).toBe(1)

        /*----------------Transfer plane1 from LAX to LHR--------------------------*/         
        // const plane2 = new Plane()
        // const[airport3, airport4] = Airport.airports
        // airport3.landPlanes(plane2)
        // plane2.setDestination(airport4.airport_name)
        // expect(plane2.location).toBe("LAX")
        // console.log(plane2.location)


    })

    test('let airports know about eachother', () =>
    {
        expect(Airport.airports.length).toBe(4)
        console.log(Airport.airports)
    })

    test('airport have extra data we can get', (done) =>
    {
        const LHR = new Airport({airport_name:"LHR"})
        const onData = function(err,data){
            const dataString = String(data)
            const info = JSON.parse(dataString)
            expect(data.city).toBe('London')
            done()
        }
        LHR.getInfo(onData)
       
    })

    

})