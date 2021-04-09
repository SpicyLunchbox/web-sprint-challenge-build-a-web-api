//imports server from server.js
const server = require('./api/server.js');


//activates server on port 4000
server.listen(4000, () => {
    console.log(`Server running on http://localhost:4000`);
})