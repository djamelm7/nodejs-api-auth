const bcrypt = require('bcrypt');

/*const salt = bcrypt.genSalt(10).then(salt => { console.log(salt)});
bcrypt.hash('5222', salt).then(hash=>{ console.log(hash)})
.catch((err) =>{ console.log(err.message) });*/
async function hashPassword() {

    const hash = await bcrypt.hash('1234', bcrypt.genSalt(10))
    console.log(salt)
    console.log(hash)
}
hashPassword();
