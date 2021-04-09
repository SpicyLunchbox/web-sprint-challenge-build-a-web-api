const Projects = require(`./projects-model.js`); // imports projects model
const express = require(`express`); // imports express

const router = express.Router(); // creates router using express


// [GET] /api/projects returns an array of projects (or an empty array) as the body of the response.
router.get(`/`, (req,res) => {

})



// [GET] /api/projects/:id returns a project with the given id as the body of the response.
router.get(`/:id`, (req,res) => {

})




// [POST] /api/projects returns the newly created project as the body of the response.
router.post(`/`, (req,res) => {


})



// [PUT] /api/projects/:id returns the updated project as the body of the response.
router.put(`/:id`, (req,res) => {

})



// [DELETE] /api/projects/:id returns no response body.
router.delete(`/:id`, (req,res) => {
    
})




module.exports = router; // exports router for use in server.js