const {User,Team} = require('./models/index');


async function getUsers(){
    const users = await User.findAll({ include: Team });
    console.log(JSON.stringify(users, null, 2));
}
getUsers();