const jwt = require('json-web-token');
const express = require('express');
const router = express.Router();


// secret key for signing JWT
const secret = process.env.SECRET_JWT;

// middleware to check for valid JWT
const checkJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized: Invalid token');
        }
        req.username = decoded.username;
        next();
    });
};

module.exports = checkJWT