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
/*This code sets up an "express" server and connects to a MongoDB database using the "mongodb" library. It then sets up four routes for performing CRUD operations on the "items" collection in the database:

The "POST" route listens for requests to create a new item and inserts the item into the database using the "insertOne" method.
The "GET" route listens for requests to read an item from the database and retrieves the item using the "findOne" method.
The "PUT" route listens for requests to update an item and updates the item in the database using the "updateOne" method.
The "DELETE" route listens for requests to delete an item and removes the item from the database using the "deleteOne" method.
Each of these routes takes a request and a response object as arguments, and they use the request object to get the data needed to perform the operation (such as the id of the item to delete or the updated data to save). They then use the response object to send the result of the operation back to the client.*/
