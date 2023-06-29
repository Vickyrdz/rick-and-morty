const { User } = require("../DB_connection.js"); 

module.exports = async (req, res) => {
    try {
        const { email, password } = req.query;
        console.log({ email, password });

        if(!email || !password ) return res.status(400).send("Faltan datos"); 

        const users = await User.findAll(); //el primero que coincide
        
        const foundUser = await User.findOne({ where: { email: email } }); //el primero que coincide

        if(!foundUser) return res.status(400).send("Contraseña incorrecta"); 

        return foundUser.password === password 
            ? res.json({ access: true })
            : res.status(403).send(error.message)
    } catch (error) {
        return res.status(500).send(error.message); 
    }
}