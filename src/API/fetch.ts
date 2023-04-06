import axios from 'axios';

export async function fetchAll(url: string) {
  const getUrl = axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error))
    .finally(() => console.log('Fetch Done!'));
  return getUrl;
}
