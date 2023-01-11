const express = require('express')
const path = require('path')
const app = express()

//allows all files in the /public folder to be accessed from
//the backend process
app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => {
    console.log('server running on port 4000')
})
