import axios from 'axios';

const baseURL = process.env.REACT_APP_BACK_BASE_URL;

export const requestGetCategories = async () => {
  const response = await axios.get(`${baseURL}/categories`);
  return response.data;
};

export const requestGetFoods = async () => {
  const response = await axios.get(`${baseURL}/foods`);
  return response.data;
};

export const requestGetOption = async () => {
  const response = await axios.get(`${baseURL}/options?temperature=1&size=1`);
  return response.data;
};

export const requestPostOrder = async (order) => {
  try {
    const response = await axios.post(`${baseURL}/order`, order);
    return response.data;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
