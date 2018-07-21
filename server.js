//Packages
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const $port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

app.use(express.static('./mybook-client/dist/mybook-client/'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'mybook-client/dist/mybook-client/'))
})

const server = app.listen($port, "0.0.0.0", () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`MyBook is listening on http://${host}:${port}`)
})