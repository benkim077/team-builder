const express = require('express');
const cors = require('cors');

const { getUserIdBy, getUserRankTierBy } = require('./src/api.js');

const app = express();
const port = 3000;

// cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/rank/:summonerName', async (req, res) => {
  console.log('get rank by summonerName => req.params', req.params);
  const { summonerName } = req.params;

  // const { data } = await getUserIdBy(summonerName);
  // console.log(data);
});

// app.get('/user/:id', (req, res) => {
//   // http://localhost:3000/user/benkim077
//   // const q = req.params;

//   // http://localhost:3000/user/benkim077/?q=benkim&location=seoul&age=30
//   const q = req.query;

//   res.json({ ...q });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
