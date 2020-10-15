const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
  console.log(` Perfect! Let's move on `)
  next()
})
app.get('/getme', (req, res) => {

  res.json( { message: 'YouMessage' } )
  
});

app.post('/postme', (req, res) => {
  res.json(req.body)
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.