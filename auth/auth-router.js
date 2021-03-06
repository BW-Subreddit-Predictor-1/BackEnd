const router = require('express').Router();
const Users = require('../User/user-models.js');
const bcryptjs = require('bcryptjs');
const { jwtSecret } = require('../config/secret.js');
const jwt = require('jsonwebtoken');

const { isValid } = require('../User/user-services.js');

router.post("/register", (req, res) => {
    const credentials = req.body;
  
    if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8;
  
      // hash the password
      const hash = bcryptjs.hashSync(credentials.password, rounds);
  
      credentials.password = hash;
      const token = generateToken(credentials);
      // save the user to the database

      Users.insertUser(credentials)
        .then(user => {
          res.status(201).json({ data: user,token:token,user_id:user.id });
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
  });

  router.post("/login", (req, res) => {
    let { Email, password } = req.body;
  
    if ((req.body)) {
      Users.findBy({ email: Email })
        .then(([user]) => {
          // compare the password the hash stored in the database
          if (user && bcryptjs.compareSync(password, user.password)) {
            const token = generateToken(user); // get a token 
  
            res.status(200).json({ 
              message: "Welcome to our API",
              token:token,
              user_id:user.id
             });
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
  });

  function generateToken(user) {

    const payload = { 
        username: user.username
    }
    const options = {
        expiresIn: "2d"
    } 
        return jwt.sign(payload, jwtSecret, options)
        
    }

  module.exports = router;