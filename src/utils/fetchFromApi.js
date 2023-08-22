import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'fa45dcc716msh3d63198f6e468f4p15cd9ajsn5658af4d9ec6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async(url) => {
   const { data } =  await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}