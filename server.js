// Setup server
const express = require("express")
const app = express()


// First route. Go to http://localhost:5000 and you should see Hello World in the
// browser. Remember the project has no UI, so this is just for you to experience
// that this all works.
app.get('/', (req, res) => res.send('Hello World!!'))


// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))