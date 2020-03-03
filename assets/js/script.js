// get cocktail data from json
function getCardData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

// clear last results
function clearLastResults() {
    var el = document.getElementById("data");
    el.innerHTML = "";
}

// create buttons list cocktails
function createCocktailCards() {
    var tableRows = [];
    var cardData, cardImage;
    var el = document.getElementById("card");
    el.innerHTML = "";

    clearLastResults();

    getCardData(function (data) {
        data = data.drinks;

        // cycle thru 
            var card = [];

            for (var i=0;i < data.length; i++){
              cardImage = data[i].strDrinkThumb;
              cardData = data[i].strDrink;
              card.push(`
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="${cardImage}" alt="${cardData}"></p>
                                        <h4 class="card-title">${cardData}</h4>
                                        <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                        <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">${cardData}</h4>
                                        <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  `);
            }
            tableRows.push(`<tr>${card}</tr>`);

        el.innerHTML = `<table>${tableRows}</table>`.replace(/,/g,"");
    });
}
