const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const User = require('../models/user'); // Adjust the path to your User model


const auth = jwt({
    secret: "myTemporarySecret",
    userProperty: "payload",
    algorithms: ["HS256"],
});

// const authController = require('../controllers/authentication');

console.log(auth)

// Route to fetch all users
router.route('/users').get(async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users); // Respond with the users
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

module.exports = router;

// API routes
// Route to authenticate a user
// router
//     .route('/login')
//     .post(authController.login);



module.exports = router;