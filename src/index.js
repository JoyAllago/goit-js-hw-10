import { fetchBreeads, fetchCatByBreed } from "./cat-api";

const loader = document.getElementById('loader');
const error_display = document.getElementById('error');
const cat_select = document.getElementById('cat_select');
const cat_info = document.querySelector('.cat-info')

cat_select.addEventListener('change', event => {
    cat_info.innerHTML = '';
    loader.classList.remove('hidden');
        const breedId = event.target.value
        fetchCatByBreed(breedId).then(({ data })=> {
     
          const description = data[0].breeds[0].description;
          const name= data[0].breeds[0].name;
          const url= data[0].url;

          displayCatMarkup(url,description,name);
          loader.classList.add('hidden');
        }).catch(error => {
            loader.classList.add('hidden');
            error_display.classList.remove('hidden');
        });
});


function displayCatMarkup(url,description,name){

  const info = `<div 
  class="max-w-lg mt-5  p-4 border border-gray-200 rounded shadow  md:p-6 ">
  <div class="flex items-center w-full justify-center h-[400px] mb-4 bg-gray-300 rounded dark:bg-gray-400">
   <img src="${url}" class="w-full h-full object-cover"> </img>
  </div>
  <div class="text-lg font-bold w-fit mb-4">${name}</div>
  <div class="w-fit p-4 bg-gray-300   mb-2.5">
   <p>${description}</p>
  </div>

</div>
  `;
 
  cat_info.insertAdjacentHTML('beforeend', info);
    
}


function select_cats() {
    return get_cats()
    .then(({ data }) => {
        const cats  = Object.values(data);
         cats.map(cat => createSelectOptions(cat.name,cat.id))
      });
}
function createSelectOptions(name,id){
   
    cat_select.insertAdjacentHTML('beforeend', `<option value="${id}">${name}</option>`);
   
}
window.addEventListener('DOMContentLoaded', function () {
    select_cats().catch(error => {
        loader.classList.add('hidden');
        error_display.classList.remove('hidden');
    });;
});