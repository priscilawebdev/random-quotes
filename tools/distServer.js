const express = require('express')
const open = require('open')
const path = require('path')


/* eslint-disable no-console */

const port = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'))
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, (err) => {
	if (err) {
		console.log(err)
	} else {
		open(`http://localhost:${port}`)
	}
})
