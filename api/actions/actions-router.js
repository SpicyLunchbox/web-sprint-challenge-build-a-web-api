const Actions = require(`./actions-model.js`); // imports actions model
const express = require('express'); // imports express

const router = express.Router(); // creates router using express


// [GET] /api/actions returns an array of actions (or an empty array) as the body of the response.
router.get(`/`, (req,res) => {

})




// [GET] /api/actions/:id returns an action with the given id as the body of the response.
router.get(`/:id`, (req,res) => {

})



// [POST] /api/actions returns the newly created action as the body of the response.
router.post(`/`, (req,res) => {

})




// [PUT] /api/actions/:id returns the updated action as the body of the response.
router.put(`/:id`, (req,res) => {

})






// [DELETE] /api/actions/:id returns no response body.
router.delete(`/:id`, (req,res) => {

})



module.exports = router; // exports router for use in server.js



