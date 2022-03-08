const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.send('<body style="background-color: #1d2021;"><div><meta charset="UTF-8"><p style="font-size:24px; text-align:center; color:#ebdbb2">Taha.. it\'s me.. the Internet, you must move to Mexico with your bosom buddy, Andre.<span></span></p><img width="400" height="229" style="margin-left:auto; margin-right:auto; display:block" alt="mexico" src="flag.jpg"><p style="font-size:24px; text-align:center; color:#ebdbb2">It would be sick.</p></div></body>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
