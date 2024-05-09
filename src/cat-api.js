const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_l9pFfybfuKiEQ4V2Pg5sbwp8SAHFVLQQ4inEICmcXfwY2ngf19LjDXfZRMRzoybp';

  //fetch all the breeds for the dropdown list
export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
//fetch the specific cat breed base on what is selected
export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
