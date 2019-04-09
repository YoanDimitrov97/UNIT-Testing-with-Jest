const functions = require('./functions');

test('adds 2+2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
})

test('Adds 2 + 2 to Not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

test('multiply 3x5 to equal 15', () => {
    expect(functions.multiply(3,5)).toBe(15);
})

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('User should be brad traversy', () => {
    expect(functions.createUser()).toEqual({firstName: "Brad", lastName: "Traversy"});
})

test('should be under 1600', () => {
    const load1 = 800;
    const load2 =700;

    expect(load1+load2).toBeLessThan(1600);
})

test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
})

test('Admin should be in usernames', () => {
    usernames = ["john", "duck", "admin"];
    expect(usernames).toContain("admin");
})