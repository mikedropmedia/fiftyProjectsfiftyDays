const express = require('express')
const app = express()
const port = 3000

// Connect to the database
const MongoClient = require('mongodb').MongoClient
const uri =
  'mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect((err) => {
  // Create a new item in the database
  app.post('/items', (req, res) => {
    const collection = client.db('test').collection('items')
    collection.insertOne(req.body, (err, result) => {
      // Return the result
      res.send(result)
    })
  })

  // Read an item from the database
  app.get('/items/:id', (req, res) => {
    const collection = client.db('test').collection('items')
    collection.findOne({ _id: req.params.id }, (err, result) => {
      // Return the result
      res.send(result)
    })
  })

  // Update an item in the database
  app.put('/items/:id', (req, res) => {
    const collection = client.db('test').collection('items')
    collection.updateOne(
      { _id: req.params.id },
      { $set: req.body },
      (err, result) => {
        // Return the result
        res.send(result)
      }
    )
  })

  // Delete an item from the database
  app.delete('/items/:id', (req, res) => {
    const collection = client.db('test').collection('items')
    collection.deleteOne({ _id: req.params.id }, (err, result) => {
      // Return the result
      res.send(result)
    })
  })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
