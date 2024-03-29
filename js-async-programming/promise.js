import fetch from'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi).then(response => response.json());
};

fetchData(`${API}/products`)
    .then(products => {
        console.log(products[0]);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(product => {
        console.info(product.title)
        return fetchData(`${API}/categories/${product?.category?.id}`)
    }).then(category => console.info(category.name))
    .catch(err => console.error(err));
