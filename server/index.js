const express = require('express')
const bookCtrl = require('./controllers/booksController')

const app = express()
const PORT = 5000

app.use(express.static(__dirname + '/../build'))
app.use(express.json())

app.get('/api/books', bookCtrl.getAllBooks)
app.post('/api/books', bookCtrl.createBook)
app.put('/api/books/:id', bookCtrl.updateBook)
app.delete('/api/books/:id', bookCtrl.deleteBook)

app.listen(PORT, () => console.log(`Get your kicks on route ${PORT}`))







































// const express = require("express");
// const bc = require("./controllers/books_controller.js");

// const app = express();

// app.use(express.json());
// app.use(express.static(__dirname + "/../build"));

// app.get("/api/books", bc.read);
// app.post("/api/books", bc.create);
// app.put("/api/books/:id", bc.update);
// app.delete("/api/books/:id", bc.delete);

// const port = 4000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });