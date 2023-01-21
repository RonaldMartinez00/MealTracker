const jwt = require('json-web-token');
const express = require('express');
const router = express.Router();
const userAuth = express.Router();
const db = '../models';
const {User} = db
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

// POST route
router.post("/", async(req,res) => {
    const user = await User.findOne({ useremail : req.useremail });
    try {
        if (!user){

            res.status(404).json({
                message: `User not found`
            })
        }
        else{
            const result = await jwt.encode(process.env.SECRET_JWT, {id:user._id})
            res.json({user: user, token:result.value})
        }
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);

        }
});

// GET route
router.get('/profile', async (req, res) => {
    try {
        const[authenticationMethod, token] = req.headers.authorization.split(' ')
        if (authenticationMethod == 'Bearer'){
            //decode JWT
            const result= await jwt.decode(process.env.SECRET_JWT, token)
            const id= result.value.id
            let user= await User.findOne({_id:id})
            res.json('user')

        }
    } catch{
        res.json(null)
    }
});
    
module.exports = checkJWT
module.exports = router