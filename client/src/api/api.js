import axios from 'axios';

const baseURL = '/api';

export const requestGetCategories = async () => {
  // const response = await axios.get(`${baseURL}/category`);
  // return response.data;
  const data = [
    {
      id: 1,
      name: '커피'
    },

    {
      id: 2,
      name: '주스'
    },

    {
      id: 3,
      name: '디저트'
    },

    {
      id: 4,
      name: '마카롱'
    },
    {
      id: 5,
      name: '케이크'
    },

    {
      id: 6,
      name: '브라우니'
    },
    {
      id: 7,
      name: '스콘'
    },
    {
      id: 8,
      name: '슈크림'
    },
    {
      id: 9,
      name: '쇼콜라'
    }
  ];

  return data;
};
