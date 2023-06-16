const express = require('express');
const { getallUsers, addUser, getUserByIdAndEdit, deleteUser } = require('../controllers/User');

const router = express.Router();


// find all users
router.get('/getallUsers', getallUsers)
// add new user
router.post('/addUser', addUser)
//EDIT A USER BY ID 
router.put('/getUserByIdAndEdit', getUserByIdAndEdit)
// delete a user
router.delete('/deleteUser/:_id', deleteUser)

module.exports = router 