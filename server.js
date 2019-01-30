const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://circlelink:circle123@ds149344.mlab.com:49344/circledb',(err,client)=>{
  if (err) return console.log(err)
  db = client.db('circledb')
  app.listen(3000,function(){
    console.log('listening on 3000')
  })
})
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})
app.post('/qoutes',(req,res)=>{
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
