

import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');


inputRef.addEventListener('input', debounce(inputSearch, DEBOUNCE_DELAY));


function inputSearch() {
  const searchQuery = inputRef.value.trim();
  clearMarkup();
  if (searchQuery !=='') {
    fetchCountries(searchQuery).then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      else if (data.length === 0) {
        Notify.failure('Oops, there is no country with that name');
      }
      else if (data.length >= 2 && data.length <= 10) {
        addCountriesList(data);
      }
      else if (data.length === 1) {
        addCountryCardInfo(data);
      }
    });
  }
};


function addCountriesList(countries){
countryListRef.innerHTML = countries
      .map(
        country => 
          
          `<li country-list__item><img class="flag" src="${country.flags.svg}" width=30 alt="flag"><span>${country.name}</span></li>`
      )
      .join('');
    countryInfoRef.innerHTML = '';
};

function addCountryCardInfo(countries) {
  countryInfoRef.innerHTML = countries
      .map(
        country =>
          `<li class="country-info__item"> <img class="flag" src="${
            country.flags.svg
          }" width=50 alt="flag">${
            country.name
          }</li>
          <li><p>Capital:</p> ${
            country.capital
          }</li>
          <li><p>Population:</p> ${
            country.population
          }</li>
          <li><p>Languages:</p> ${country.languages.map(
            language => language.name
          )}</li>` 
      )
      .join('');
    countryListRef.innerHTML = ''};

function clearMarkup() {
  countryListRef.innerHTML = '';
  countryInfoRef.innerHTML = '';
}
