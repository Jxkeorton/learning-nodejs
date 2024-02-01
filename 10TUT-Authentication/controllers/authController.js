const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt')

const handleLogin = async (req, res) => {
    const { username, pwd } = req.body
    if(!username || !pwd) { 
        res.status(400).json({ "message": "username and password are required"})
    }
    const foundUser = usersDB.users.find(person => person.username === username)
    if (!foundUser) return res.sendStatus(401) // unauthorized

    //evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password)
    if(match){
        // create JWT's 
        res.json({"message": `${username} is logged in`})
    } else {
        res.sendStatus(401) // unauthorized
    }
}

module.exports = { handleLogin }