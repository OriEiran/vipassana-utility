const express = require('express')
const path = require('path')
const app = express()

// Set up EJS
app.set('view engine', 'ejs')

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("index")
})

// Use environment port or default to 3000
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})