import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

// CREATE THE OPTIONS

function chooseBreed() {
  fetchBreeds()
    .then(data => {
      loaderEl.classList.add('is-hidden');

      // Map breed data to option elements
      let optionsMarkup = data.map(breed => {
        return `<option value="${breed.id}">${breed.name}</option>`;
      }).join(''); // join the array of options into a single string

      // Add options to select element
      breedSelectEl.insertAdjacentHTML('beforeend', optionsMarkup);
      breedSelectEl.classList.remove('is-hidden');
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      errorEl.textContent = 'Error fetching breeds. Please try again later.';
      errorEl.classList.remove('is-hidden');
    });
}

// Call chooseBreed function to start the process
chooseBreed();
