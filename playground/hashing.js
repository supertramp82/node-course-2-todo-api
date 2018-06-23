const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

let hashedPassword =
  '$2a$10$4Rp.8SZYQvX/uhzMgbnZ2OmhuInf5Llfd7iVYzQ5QSIEpgamYDNwK';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

hashedPassword = '$2a$10$KhcTbqagcCYzll.fDyC6sODNxUAnHNcYSTVi8o5WzNJt57CI6AhaS';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

hashedPassword = '$2a$10$yzsa1K8f6LQcpwgCD4VHGeL8xwPWObKxIheKSyNkA093hui511KMm';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// const data = {
//   id: 10
// };

// const token = jwt.sign(data, '123abc');

// console.log(token);

// const decoded = jwt.verify(token, '123abc');

// console.log(decoded);

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//   id: 4
// };

// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 4;

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }
