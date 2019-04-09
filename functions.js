const axios = require('axios');
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    multiply: (num1, num2) => num1 * num2,
    checkValue: x => x,
    createUser:() => {
        const user = { firstName:"Yoan" }
        user['lastName'] = 'Dimitrov';
        return user;
    },
    fetchUser:() => axios.get('https://jsonplaceholder.typicode.com/users/2').then(res => res.data).catch(err => 'error') 
}

module.exports = functions;