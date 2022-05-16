const BASE_URL = "https://private-anon-1940db5e31-lampshop.apiary-mock.com/lamps";


const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const checkResult = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const getProducts = () => {
  return fetch(BASE_URL, {
    method: "GET",
    headers,
  }).then(checkResult);
};
