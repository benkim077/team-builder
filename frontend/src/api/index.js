import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'X-Riot-Token': import.meta.env.VITE_API_KEY,
  },
});

export async function getUserRankTierBy(summonerName) {
  const { data } = await instance.get(`/api/rank/${summonerName}`);
  return data;
}
