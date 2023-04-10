import axios from 'axios';

const API_URL = 'https://qrhazi-backend.azurewebsites.net/qr';

export async function createQR(username: string, token: string) {
  //get request
  const result = await axios.get(`${API_URL}/generate`, {
    params: {
      username: username,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
}