const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Taha, this is the Internet, you must move to Mexico with your bosom buddy, Andre.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
