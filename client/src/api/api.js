import axios from 'axios';

const baseURL = '/api';

export const requestGetCategory = async () => {
  const response = await axios.get(`${baseURL}/category`);
  return response.data;
};
