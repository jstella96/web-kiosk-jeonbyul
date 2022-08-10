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

export const requestGetFoods = async () => {
  // const response = await axios.get(`${baseURL}/category`);
  // return response.data;
  const data = [
    {
      id: 1,
      name: '커피',
      foods: [
        {
          id: 1,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 2,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 3,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 2,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 4,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 2,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 5,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 6,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 7,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 2,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 8,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 2,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 9,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 10,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 11,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 2,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 12,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 2,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        }
      ]
    },

    {
      id: 2,
      name: '주스',
      foods: [
        {
          id: 1,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 2,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        }
      ]
    },

    {
      id: 3,
      name: '디저트',
      foods: [
        {
          id: 1,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 2,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        }
      ]
    },

    {
      id: 4,
      name: '마카롱',
      foods: [
        {
          id: 1,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 2,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        }
      ]
    },
    {
      id: 5,
      name: '케이크',
      foods: [
        {
          id: 1,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        },
        {
          id: 2,
          name: '콜드블루',
          basePrice: 2000,
          categoryId: 1,
          imgUrl: 'https://www.ediya.com/files/menu/IMG_1649842079840.png',
          star: true
        }
      ]
    },

    {
      id: 6,
      name: '브라우니',
      foods: []
    },
    {
      id: 7,
      name: '스콘',
      foods: []
    },
    {
      id: 8,
      name: '슈크림',
      foods: []
    },
    {
      id: 9,
      name: '쇼콜라',
      foods: []
    }
  ];
  return data;
};

export const requestGetOption = async () => {
  return {
    size: {
      1: {
        s: 0,
        m: 500,
        l: 1000
      },
      2: {
        s: 0,
        m: 1000,
        l: 2000
      },
      3: {
        s: 100,

        l: 1000
      }
    },
    temperature: {
      1: { h: 100, c: 500 },
      2: { c: 500 },
      3: { h: 0, c: 1000 }
    }
  };
};
