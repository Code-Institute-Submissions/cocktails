// display drink info in card
function displayCocktailRecipe(cocktailData){
    cocktailData = cocktailData.drinks;
    cocktail = cocktailData.strDrink;
    cocktailImage = cocktailData.strDrinkThumb;
    cocktailRecipe = cocktailData.strInstructions;
    cocktailIngredients = cocktailData.strMeasure1 + " " + cocktailData.strIngredient1;
  
    return `
    <div class="container">
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
              <div class="box">
                  <div class="box-icon">
                      <img class=" img-fluid" src="${cocktailImage}" alt="${cocktail}">
                  </div>
                  <div class="info">
                      <h4 class="text-center">${cocktail}</h4>
                      <ul>
                      <li>${cocktailIngredients}</li>
                      </ul>
                      <p>${cocktailRecipe}</p>
                      <a href="index.html" class="btn">Back to List</a>
                  </div>
              </div>
          </div>
      </div>
    </div>`
  }
  
  // get drink data from json
  function fetchCocktailRecipe(event){
    var cocktailName = $("#cocktailName").val();
    if (!cocktailName) {
      $("#cocktailData").html(`<h2>Please enter a Cocktail name</h2>`)
      return;
    }
    
    $("#cocktailData").html(`
        <div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only">Loading...</span>
        </div>`);
  
    $.when(
      $.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    ).then(
      function(response) {
        var cocktailData = response;
        $("#cocktailData").html(displayCocktailRecipe(cocktailData));
      },
      function(errorResponse){
        if (errorResponse.status === 404) {
          $("#cocktailData").html(
            `<h2>No recipe found for cocktail ${cocktailName}<h2>`);
        } else {
          console.log(errorResponse);
          $("#cocktailData").html(
            `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
        }
      }
    )
  }