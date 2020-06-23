const app = require('./api/server.js'); // import the express package

const PORT = process.env.PORT || 5050;

app.listen(PORT,() => {
    console.log(`listing on http://localhost:${PORT}`)
});