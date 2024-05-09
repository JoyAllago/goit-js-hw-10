const BASE_URL ="https://api.thecatapi.com/v1";
const API_KEY ="live_l9pFfybfuKiEQ4V2Pg5sbwp8SAHFVLQQ4inEICmcXfwY2ngf19LjDXfZRMRzoybp";

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.error('Error fetching breeds:', error);
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
  .then(res => {
    if (!res.ok){
      throw new Error(res.status);
    } else {
      return res.json();
    }
  })
  .catch(error => {
    console.error('Error fetching images:', error);
  });
}
