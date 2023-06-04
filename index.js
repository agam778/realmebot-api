const express = require('express')
const data = require('./data.json')

const app = express()

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data, null, 2))
})

app.get('/:query', (req, res) => {
  const query = req.params.query.toLowerCase()

  const results = Object.entries(data).flatMap(([series, devices]) => {
    return Object.entries(devices)
      .filter(([codename, model]) => {
        const codenameLower = codename.toLowerCase()
        const modelLower = model.toLowerCase()

        return codenameLower.includes(query) || modelLower.includes(query)
      })
      .map(([codename, model]) => ({
        series,
        codename,
        model,
      }))
  })

  if (results.length === 0) {
    res.status(404).json({ error: 'No matching results found.' })
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(results, null, 2))
  }
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
