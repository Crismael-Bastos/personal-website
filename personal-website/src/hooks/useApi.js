import axios from 'axios';


const baseURL = 'https://api.github.com/users/crismael-bastos';

export const api = axios.create({
  baseURL: baseURL,
});

export const useApi = () => ({
    getAvatar: async () => {
      const response = await api.get()
      return response;
    },
   
  });