const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<body style="background-color: #1d2021;"><div><meta charset="UTF-8"><p style="font-size:24px; text-align:center; color:#ebdbb2">You\'re crushing it, Shawnmigo.</p></div></body>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
