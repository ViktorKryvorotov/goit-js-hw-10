import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
import fetchCountries from './fetchCountries';


// import contryCard from './country-card.hbs'

const inputRef = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');


inputRef.addEventListener('input', debounce(onInputChange,DEBOUNCE_DELAY));

function onInputChange(e) {
   console.log(e.target.value);
}


// fetchCountries().then(name => {
//     const markup=contryCard(name)
// }).catch(error => {
//     console.log(error);
// });
 



function renderCountryCard(name) {
  console.log(name)  
};

