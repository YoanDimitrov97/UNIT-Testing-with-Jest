const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    multiply: (num1, num2) => num1 * num2,
    checkValue: x => x,
    createUser:() => {
        const user = { firstName:"Brad" }
        user['lastName'] = 'Traversy';
        return user;
    }
}

module.exports = functions;