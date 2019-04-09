const functions = require('./functions.js');
const axios = require('axios');

//Add two values, they should equal their added value
test('adds 2+2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
})

//Add two values, who shouldn't equal a value
test('Adds 2 + 2 to Not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

//Checking that a null is null
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

//Multiplying 2 vals to equal the right value
test('multiply 3x5 to equal 15', () => {
    expect(functions.multiply(3,5)).toBe(15);
})

//Testing a false statement
test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

//Testing a true statement
test('should be truthy', () => {
    expect(functions.checkValue(0)).toBeTruthy();
})

//Testing if 2 array values to be equal to some string
test('User should be ', () => {
    expect(functions.createUser()).toEqual({firstName: "Yoan", lastName: "Dimitrov"});
})

//Expecting added value to be < 1600
test('should be under 1600', () => {
    const load1 = 800;
    const load2 =700;
    expect(load1+load2).toBeLessThan(1600);
})

//A letter not existing in a word
test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
})

//Value being contained in an array
test('Admin should be in usernames', () => {
    usernames = ["john", "duck", "admin"];
    expect(usernames).toContain("admin");
})