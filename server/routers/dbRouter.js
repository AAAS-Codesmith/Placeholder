const express = require('express');
const dbController = require('../controllers/dbController.js');
const router = express.Router();

// Figure out what sort of get requests may be necessary

///////////////////////////////////////////////////////////////////////////////
// GET routes /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Route to request user data
router.get('/user/:user_id', dbController.getUserInfo, (req, res) => {
  res.status(200).json(res.locals.user_info);
});

// Route to get specific team's information
router.get('/teaminfo/:team_id', dbController.getTeamInfo, (req, res) => {
    res.status(200).json(res.locals.team_info);
});


///////////////////////////////////////////////////////////////////////////////
// POST routes ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Route to add a new user to the database
router.post('/user', dbController.createUser, (req, res) => {
  res.status(200).json(res.locals.user_info);
});

// Route to add a new team to the database
router.post('/team', dbController.createTeam, dbController.updateUser, (req, res) => {
    res.status(200).json(res.locals.team_info);
});
