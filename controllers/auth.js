const {User} = require('../models/');
const jwt = require('jsonwebtoken');
require('../utils/passport');
const {secretOrKey} = require('../config/constants');

const genToken = user => {
    return jwt.sign({
      iss: user.name,
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    }, secretOrKey);
  }

module.exports.registerUser = async(req,res) => {
    
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(401).send("Missing mandatory info!");
    }

    const checkUser = await User.findOne({
        where: {
            email
        }
    });

    if(checkUser){
        return res.status(401).send("Email already exist!");
    }

    try {
        const newUser = await User.create({name, email, password});

        const token = genToken(newUser);
    
        return res.send(token);
            
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
module.exports.login = async(req,res) => {};
module.exports.logout = async(req,res) => {};

