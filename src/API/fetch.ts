import axios from 'axios';

export async function fetchAll(url: string) {
  const getUrl = axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error))
    .finally(() => console.log('Fetch Done!'));
  return getUrl;
}

const api = axios.create({
  baseURL: `http://localhost:3001/users`,
});

export async function loginPost(url: string, body:any) {
  const { data } = await api.post(url, body);
  return data;
}