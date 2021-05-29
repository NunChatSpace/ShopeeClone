const jwt = require('jsonwebtoken')
const {SECRETKEY} = require('../assets/constant');

const authenticationService = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(req.headers.authorization);
        const decodedToken = jwt.verify(token, SECRETKEY);
        req.userData = { username: decodedToken.username, password: decodedToken.password };
        next();
      } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
      }
}

module.exports = {authenticationService};