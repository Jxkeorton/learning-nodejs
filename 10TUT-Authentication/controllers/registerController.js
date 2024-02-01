const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const handleNewUser = async (req,res) => {
    const { username, pwd } = req.body
    if(!username || !pwd) { 
        res.status(400).json({ "message": "username and password are required"})
    }
    // check for duplicate usernames in DB
    const duplicate = usersDB.users.find(person => person.username === username)
    if ( duplicate ) return res.sendStatus(409) // conflict
    try {
        //encrypt the password
        const hashedPassword = await bcrypt.hash(pwd, 10)
        // store the new user
        const newUser = { "username": username, "password": hashedPassword }
        usersDB.setUsers([...usersDB.users, newUser])
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        )
        console.log(usersDB.users)
        res.status(201).json({"success": `new user ${username} created`})
    } catch (error) {
        res.status(500).json({ "message": error.message})
    }
}

module.exports = { handleNewUser }