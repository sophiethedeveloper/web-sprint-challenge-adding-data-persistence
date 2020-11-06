require('dotenv').config();
const server = require('./server')

const PORT = process.env.PORT || 4400;

server.listen(PORT, () => {
    console.log(`\n server listening in port ${PORT}`.america)
})