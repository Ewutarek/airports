const Bag = require('./Bag')
/*-------------------Test bags-----------------------------------------*/
describe('Bag', function ()
{
    test('bag has a weight', function () 
    {
        const bag = new Bag(13)
        expect(bag.weight).toBe(13)
    })
})

