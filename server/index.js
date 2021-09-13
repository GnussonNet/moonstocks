const express = require('express')
const app = express()
const port = 3001

app.get('/api', (req, res) => {
  res.send('Moonstocks BACKEND!!!!!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})