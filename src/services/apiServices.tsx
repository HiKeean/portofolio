// services/apiService.js

const API_URL = 'https://api-porto-seven.vercel.app/api'; // Ganti dengan URL API yang sesuai
const API_URL_2 = 'http://localhost:3001/api'; // Ganti dengan URL API yang sesuai

export const getText = async () => {
  try {
    const response = await fetch((`${API_URL}/text`));
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchDataApi = async (endpoint: any, params = {}) => {
  try {
    const url = new URL(`${API_URL_2}/${endpoint}`);
    url.search = new URLSearchParams(params).toString(); 

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

