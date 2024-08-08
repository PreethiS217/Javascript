const square = async function (n) {
    return n * n; 
}

const getValue = async () => {
    const value = await square(2); 
    console.log(value); 
}

getValue(); 
const url = 'https://restcountries.com/v2/all';

fetch(url)
    .then(response => response.json()) 
    .then(data => {
        console.log(data); 
    })
    .catch(error => console.error(error)); 

const fetchData = async () => {
    try {
        const response = await fetch(url); 
        const countries = await response.json(); 
        console.log(countries); 
    } catch (err) {
        console.error(err); 
    }
}

console.log('===== async and await');
fetchData();