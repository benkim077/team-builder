import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kr.api.riotgames.com',
  headers: {
    'X-Riot-Token': import.meta.env.VITE_API_KEY,
  },
});

export async function getUserIdFrom(summonerName) {
  const res = await instance.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
  return res.data.id;
}

export async function getUserRankTierBy(userId) {
  const res = await instance.get(`/lol/league/v4/entries/by-summoner/${userId}`);
  return res.data;
}
