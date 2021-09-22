import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.receitaws.com.br/v1/cnpj/01616929000102',
});

export default api;



// var myHeaders = new Headers();
// myHeaders.append("Cookie", "JSESSIONID=ed179333b826d9026424e4b7dd183e4d36c2892d");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://www.receitaws.com.br/v1/cnpj/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));