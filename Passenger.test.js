const Bag = require('./Bag')
const Passenger = require('./Passenger')

describe('Passenger', function ()
{
    test('has a name', function () 
    {
        const person = new Passenger({name:"Keratuwe"})
        expect(person.name).toBe("Keratuwe")
    })

    test('has bags', () => 
    {
        const person = new Passenger({name:"John"})
        const handluggage = new Bag(8)
        person.addBag(handluggage)
        expect(person.bags.length).toBe(1)
    })

    test('we can read the weight', () => 
    {
        const posh = new Passenger({name:"Posh spice"})
        const rucksac = new Bag(6)
        posh.addBag(rucksac)
        expect(posh.bags[0].weight).toBe(6)
    })



})