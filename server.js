const express = require('express');
const app = express();

app.get('/getme', (req, res) => {
  res.json({})
});

app.post('/postme', (req, res) => {
  res.json({})
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.