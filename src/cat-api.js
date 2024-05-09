const BASE_URL ="https://api.thecatapi.com/v1";
const API_KEY ="live_l9pFfybfuKiEQ4V2Pg5sbwp8SAHFVLQQ4inEICmcXfwY2ngf19LjDXfZRMRzoybp";
export const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": API_KEY
  });

export function get_cats() {
    return fetch(`${BASE_URL}breeds`, {
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then(response =>  {
          if (!response.ok) {
              throw new Error('Failed to fetch cats');
          }
          return response.json();
      })
      .then(data => {
       
        return {data};
      });
  }
  
  export function fetchCatByBreed(breedId) {
      return fetch(`${BASE_URL}images/search?breed_ids=${breedId}`, {
        headers: headers
      })
        .then(response => 
         { if (!response.ok) {
              throw new Error('Failed to fetch cats');
          }
          return response.json();
      }
      )
        .then(data => {
      
          return {data};
        });
    }
  