const Actions = require(`./actions-model.js`); // imports actions model
const express = require('express'); // imports express

const router = express.Router(); // creates router using express


// [GET] /api/actions returns an array of actions (or an empty array) as the body of the response.
router.get(`/`, (req,res) => {
    Actions.get()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({message: `unable to retrieve actions`})
        })
})



// [GET] /api/actions/:id returns an action with the given id as the body of the response.
router.get(`/:id`, (req,res) => {
    router.get(req.params.id)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json({message: `unable to retrieve action`})
        })
})



// [POST] /api/actions returns the newly created action as the body of the response.
router.post(`/`, (req,res) => {
    router.insert(req.body)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({message: `unable to create new action`})
        })
})



// [PUT] /api/actions/:id returns the updated action as the body of the response.
router.put(`/:id`, (req,res) => {
    const id = req.params.id
    const changes = req.body
    router.update(id,changes)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({message: `unable to update action`})
        })
})



// [DELETE] /api/actions/:id returns no response body.
router.delete(`/:id`, (req,res) => {
    router.remove(req.params.id)
        .then()
        .catch(err => {
            res.status(500).json({message: `unable to delete action`})
        })
})



module.exports = router; // exports router for use in server.js



