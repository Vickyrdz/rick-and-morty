const users = require("../utils/users"); 

const login = (req, res)=>{
    const { email, password } = req.query; 

    console.log({ email, password })

    const userFound = users.find((user) => {
        return user.email === email && user.password === password;
    });
    
    return userFound
        ? res.status(200).json({ access: true })
        : res.status(404).json({ access: false })
}

module.exports = {login}; 