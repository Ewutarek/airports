const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Airport = require('./Airport')


/*-------------------Test bags-----------------------------------------*/
describe('Bag', function ()
{
    test('bag has a weight', function () 
    {
        const bag = new Bag(13)
        expect(bag.weight).toBe(13)
    })
})


/*-------------------Test Passengers-----------------------------------------*/
describe('Passenger', function ()
{
    test('Passenger has a name', function () 
    {
        const person = new Passenger({name:"Keratuwe"})
        expect(person.name).toBe("Keratuwe")
    })

    test('Passenger has bags', () => 
    {
        const person = new Passenger({name:"John"})
        const handluggage = new Bag(8)
        person.addBag(handluggage)
        expect(person.bags.length).toBe(1)
    })

    test('we can read the weight of Poshs bag', () => 
    {
        const posh = new Passenger({name:"Posh Spice"})
        const rucksac = new Bag(6)
        posh.addBag(rucksac)
        expect(posh.bags[0].weight).toBe(6)
    })
})

/*-------------------Test Planes-----------------------------------------*/
describe('Planes', function ()
{
    test('Plane has a destinantion', function () 
    {
        const plane1 = new Plane({airport_dest:"Heathrow"})
        expect(plane1.airport_dest).toBe("Heathrow")
    })

    test('Plane has passengers', () => 
    {
        const plane2 = new Plane({airport_dest:"GATWICK"})
        const person1 = new Passenger({name:"John"})
        const person2 = new Passenger({name:"Katrina"})
        const person3 = new Passenger({name:"jane"})
        const person4 = new Passenger({name:"limpbzkit"})
        for (let k = 1; k < 5; k++) {
            let person = "person" + k
            plane2.boardPassengers(person)
        }
        expect(plane2.passengers.length).toBe(4)
    })

    // test('We can read the weight of all bags on plane', () => 
    // {
    //     const plane2 = new Plane({airport_dest:"GATWICK"})
    //     const person1 = new Passenger({name:"John"})
    //     const person2 = new Passenger({name:"Katrina"})
    //     const person3 = new Passenger({name:"jane"})
    //     const person4 = new Passenger({name:"limpbzkit"})
    //     const person5 = new Passenger({name:"Posh spice"})
    //     const smallbag = new Bag(8)
    //     const bigbag = new Bag(20)

    //     for (let k = 1; k < 5; k++) {
    //         let person = "person" + k
    //         plane2.boardPassengers(person.addBag)
    //         // person.addBag(smallbag);
    //         // person.addBag(bigbag);
    //         // console.log(person)
   



    //     }

    //     // const rucksac = new Bag(6)
    //     // posh.addBag(rucksac)
    //     // expect(plane.bags.weight).toBe(6)
    // })
})

/*--------------------Test Airports----------------------------------------*/
describe('Airport', function ()
{
    test('Airport has a name', function () 
    {
        const airport1 = new Airport({airport_name:"O.R Thambo Intl"})
        expect(airport1.airport_name).toBe("O.R Thambo Intl")
    })

    test('Airport has planes', () => 
    {
        const airport1 = new Airport({airport_name:"O.R Thambo Intl"})
        const plane1 = new Plane({airport_dest:"Heathrow"})
        const plane2 = new Plane({airport_dest:"Gatwick"})
        airport1.landPlanes(plane1)
        airport1.landPlanes(plane2)
        expect(airport1.planes.length).toBe(2)
    })

})