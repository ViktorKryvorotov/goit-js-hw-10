export default function fetchCountries(name) {
    return fetch('https://restcountries.com/v3.1/name/india').then(response => {
    console.log(response.json());
    return response.json;

});
}
