const functions = require('./functions');

test('adds 2+2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
})

testMult('add 3x5 to equal 15', () => {
    expect(functions.multiply(3,5)).toBe(15);
})