const {User,Team} = require('./models/index');

//this function will give array with specific user temas
async function getUserTeams(userName){
    const users = await User.findOne({where:{userName: userName}, include: Team });
    console.log(JSON.stringify(users.Teams.map(a=>a.teamName), null, 2));
}
getUserTeams("Hakob");

// giveing names of users in specific team
async function getTeamUsers(teamName){
    const teams = await Team.findOne({where:{teamName: teamName}, include: User });
    console.log(JSON.stringify(teams.Users.map(a=>a.userName), null, 2));
}

getTeamUsers("Liverpool");