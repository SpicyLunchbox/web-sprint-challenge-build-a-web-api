const Actions = require(`../actions/actions-model.js`); // imports action model
const Projects = require(`../projects/projects-router.js`); // imports projects model



// checks if action with requested id exists in database.  If not, returns a 404 status.
function validateActionId(req,res,next) {
    Actions.get(req.params.id)
        .then(action => {
            if(action === null){
                res.status(404).json({message: `action not found`})
            }else{
                next()
            }
        })
}


// checks if action with requested id exists in database.  If not, returns a 404 status.
function validateProjectId(req,res,next) {
    Projects.get(req.params.id)
        .then(project => {
            if(project === null){
                res.status(404).json({message: `project not found`})
            }else{
                next()
            }
        })
}


// exports middleware to be used in routers
module.exports = {
    validateActionId,
    validateProjectId
}