const Bag = require('./Bag')
const Passenger = require('./Passenger')
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