const express = require('express');
const cors = require('cors');

const { getUserIdBy, getUserRankTierBy } = require('./src/api.js');

const app = express();
const port = 3000;

// cors
app.use(cors());

// API
app.get('/api/rank/:summonerName', async (req, res) => {
  const { summonerName } = req.params;

  const id = await getUserIdBy(summonerName);
  const ranksSortedByQueue = await getUserRankTierBy(id);

  const ranksObj = ranksSortedByQueue.map((queue) => {
    const queueType = queue.queueType === 'RANKED_SOLO_5x5' ? '솔랭' : '자유랭';
    return {
      [queueType]: `${queue.tier} ${queue.rank}`,
    };
  });

  res.json({ ...ranksObj });
});

//
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
