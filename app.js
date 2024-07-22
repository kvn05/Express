const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/home', (req,res) => {
    // res.send("hello Home");
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (req,res) => {
    // res.send("hello About");
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/contact', (req,res) => {
    // res.send("hello About");
    res.sendFile(__dirname + '/views/contact.html');
})

app.get('/india', (req,res) => {
    res.send("hello, bharat");
})

app.get('/india/gujarat' , (req,res) => {
    res.send("hello Gujarat");
})

app.get('*', (req,res) => {
    // res.send("hello About");
    res.send('404 Not Found');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("server is running on http://127.0.0.1:3000");
})
