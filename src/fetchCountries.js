
export default function fetchCountries(searchCountry) {
 const countryParams='?fields=name,capital,population,flags,languages'
  return fetch(
    `https://restcountries.com/v2/name/${searchCountry}${countryParams}`
  ).then(response => {
    if (!response.ok) {
      if (response.status === 404) {
          return [];
        }
      throw new Error(response.status);
    }
    return response.json();
  })
  .catch(error => {
      console.error(error);
    });
}

