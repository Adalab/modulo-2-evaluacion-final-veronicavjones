'use strict';

//variables
const inputText = document.querySelector('.js-input');

const btnSearch = document.querySelector ('.js-btnSearch');
const btnReset = document.querySelector ('.js-btnReset');
const cocktailsList = document.querySelector('.js-results');



//fetch para obtener los datos de los cocktails, metodo get
/*fetch(url)
.then(response => response.json())
.then(data => {
    console.log (data);
})*/

function handleClickSearch(event) {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  event.preventDefault();

  fetch(url)
.then(response => response.json())
.then(data => {
    cocktailsDataList = data.drinks;
    renderCocktailsList(cocktailsDataList);
      
});
}

//funcion render para pintar la lista de cocktails
function renderCocktailsList(cocktailsDataList) {
    cocktailsList.innerHTML = 'resultado';
    for ( const cocktails of cocktailsDataList) {
        cocktailsList.innerHTML += renderCocktails(cocktails);
 }
 addEventToCocktails();
    
}



btnSearch.addEventListener('click',handleClickSearch);

