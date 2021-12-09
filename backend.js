const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('asdasdasd')
})

app.get('/tema', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'csevego'
    })
    
    connection.connect()
    
    connection.query('SELECT * from tema', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
 
  
  app.post('/temauzenet', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'csevego'
    })
    
    connection.connect()
    
    connection.query('SELECT * from uzenet where uzenet_tema_id='+req.body.bevitel1, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })

  app.post('/uzenetfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'csevego'
    })
    
    connection.connect()
    let dt=new Date();
    let teljesdat=dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate();
    connection.query("INSERT INTO uzenet  VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"', "+req.body.bevitel3+")", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres felvitel!")
      res.send("Sikeres felvitel!")
    })
    
    connection.end()
    

  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})