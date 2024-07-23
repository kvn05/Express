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

app.get('/search/', (req, res) => {
    var mysearch = req.query.q; 
    res.send("hello, search is " + mysearch);
});

app.get('/edit/:id/', (req, res) => {
    var myid = req.params.id; 
    res.send("hello, search is " + myid);
});

app.get('/india/gujarat' , (req,res) => {
    res.send("hello Gujarat");
})

app.get('/process' , (req, res) => {
    // var a = parseInt(req.query.txt1);
    // var b = parseInt(req.query.txt2);
    // var c = a + b;
    // var msg = ''

    // var ans = `A value is ${a} <br> B value is ${b} <br> sum is ${c} `;
    // res.send(ans);

    var m1 = parseInt(req.query.Mark1);
    var m2 = parseInt(req.query.Mark2);
    var m3 = parseInt(req.query.Mark3);
    var m4 = parseInt(req.query.Mark4);
    var m5 = parseInt(req.query.Mark5);
    var sum1 = m1+m2+m3+m4+m5;
    var avg = sum1/5;
    var sum = `sum of the marks : ${sum1} <br> Average of marks : ${avg} `;

    var ans = `<table border="1"
    <tr><td>Mark 1 </td><td> ${m1} </td></tr>
    <tr><td>Mark 2 </td><td> ${m2} </td></tr>
    <tr><td>Mark 3 </td><td> ${m3} </td></tr>
    <tr><td>Mark 4 </td><td> ${m4} </td></tr>
    <tr><td>Mark 5 </td><td> ${m5} </td></tr>
    >
    `
    res.send(ans)
})

app.get('*', (req,res) => {
    // res.send("hello About");
    res.send('404 Not Found');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("server is running on http://127.0.0.1:3000");
})

