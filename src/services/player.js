import { USER_KEY } from '@/configs';

const getStorage = () => JSON.parse(localStorage.getItem(USER_KEY)) || [];

const getPlayers = () => {
  const storage = getStorage();
  storage.sort((a, b) => b.score - a.score);
  return storage;
};

const savePlayer = player => {
  const storage = getStorage();
  storage.push(player);
  localStorage.setItem(USER_KEY, JSON.stringify(storage));
};

export default { getPlayers, savePlayer };
