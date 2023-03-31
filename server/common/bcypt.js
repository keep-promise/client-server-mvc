const bcrypt = require('bcrypt');

const SALT_ROUNDS = 1O;

const bcryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT_ROUNDS, (err, encrypted) => {
      if (err) {
        return reject(err);
      }
      resolve(encrypted)
    })
  })
}

const matchPassword = (oldHashPwd, password) => {
  return new Promise(async (resolve, reject) => {
    const match = await bcrypt.compare(password, oldHashPwd)
  })
}

module.exports = {
  bcryptPassword, matchPassword
}
