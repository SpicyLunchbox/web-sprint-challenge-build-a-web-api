const express = require('express'); // imports express middleware
const server = express(); // creates a server using express

const projectsRouter = require(`./projects/projects-router.js`); // imports router for projects
const actionsRouter = require(`./actions/actions-router.js`); // imports router for actions

server.use(express.json()); // allows server to parse json data
server.use(`/api/projects`, projectsRouter); // this means "any requests that use /api/projects will go through the projects router"
server.use(`/api/actions`, actionsRouter); // this means "any requests that use /api/action will go through the actions router"

module.exports = server; // exports the server, which we import into index.js for use
