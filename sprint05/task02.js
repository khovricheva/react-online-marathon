// Save object { name: "Tom", age: 25 } to localStorage with key: "user"

const localStorage = require('./localStorage.js');

localStorage.setItem('user', JSON.stringify({ name: 'Tom', age: 25 }));
