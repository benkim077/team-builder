const express = require('express');
const cors = require('cors');

const { getUserIdBy, getUserRankTierBy } = require('./src/api.js');
const { getNumericFrom } = require('./src/util/getNumericFrom.js');

const app = express();
const port = 3000;

// cors
app.use(cors());

// API
app.get('/api/rank/:summonerName', async (req, res) => {
  const { summonerName } = req.params;

  const id = await getUserIdBy(summonerName);
  const ranksSortedByQueue = await getUserRankTierBy(id);

  const ranks = ranksSortedByQueue.reduce((acc, cur) => {
    const queueType = cur.queueType === 'RANKED_SOLO_5x5' ? '솔랭' : '자유랭';
    const tier = cur.tier.slice(0, 1);
    const rank = getNumericFrom(cur.rank);
    return {
      ...acc,
      [queueType]: `${tier}${rank}`,
    };
  }, {});

  res.json({ ...ranks });
});

//
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
