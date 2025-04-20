import api from './api';

export interface Joke {
  id: string;
  value: string;
  url: string;
  icon_url: string;
  created_at: string;
  updated_at: string;
}

const jokesService = {
  getRandom: async (): Promise<Joke> => {
    const res = await api.get<Joke>('/jokes/random');
    return res.data;
  },

  getByCategory: async (category: string): Promise<Joke> => {
    const res = await api.get<Joke>(`/jokes/random?category=${category}`);
    return res.data;
  },

  getCategories: async (): Promise<string[]> => {
    const res = await api.get<string[]>('/jokes/categories');
    return res.data;
  },
};

export default jokesService;
