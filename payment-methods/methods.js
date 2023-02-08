const cors = require('cors')
const express = require('express')

const app = express()

const port = 3000

app.use(cors({
	origin: 'http://localhost:3001'
}))
app.get('/', (req, res) => {
	res.send('Hello there')
})

app.get('/api/payment-methods', (req,res) => {
	res.json([{name: 'apple'},{name: 'google'},{name:'cash'}])
})

app.listen(port, () => console.log(`get payments on port ${port}`))
