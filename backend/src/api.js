const axios = require('axios');

require('dotenv').config();

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'X-Riot-Token': process.env.API_KEY,
  },
});

async function getUserIdBy(summonerName) {
  const res = await instance.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
  return res.data.id;
}

async function getUserRankTierBy(userId) {
  const res = await instance.get(`/lol/league/v4/entries/by-summoner/${userId}`);
  return res.data;
}

exports.getUserIdBy = getUserIdBy;

exports.getUserRankTierBy = getUserRankTierBy;
