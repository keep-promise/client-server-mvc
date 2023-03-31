const md5 = require('md5');
const SALT = 'salt';

const md5Password = (password) => {
  return new Promise((resolve, reject) => {
    const md5PWD = md5(password, SALT);
    resolve(md5PWD);
  })
}

const matchPassword = (oldMd5Pwd, password) => {
  return new Promise((resolve, reject) => {
    const newMd5Pwd = md5(password+SALT);
    resolve(oldMd5Pwd === newMd5Pwd);
  })
}

module.export = {
  md5Password, matchPassword
}

async function test() {
  const pass = 'abc';
  const md5Pwd = await md5Password(pass);
  console.log('md5Pwd:', md5Pwd);
  const match = await matchPassword(md5Pwd, 'abc');
  console.log('Password, matches:', match);
}

test();
