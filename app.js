//endpoint = https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken
let input = document.getElementById("input");
let searchButton = document.getElementById("button");

searchButton.addEventListener("click", () => {
    document.getElementById('meal-container').innerHTML = "";
    var inputValue = input.value.trim();
    if (inputValue != "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(res => res.json())
            .then(data => displayData(data));
    }
})

//Displaying Meals in the front page
let displayData = data => {
    let meals = data.meals.slice(0, 12);
    let mealContiner = document.getElementById("meal-container");
    meals.forEach(mealsData => {
        let mealList = document.createElement("div");
        // console.log(mealsData.idMeal)
        let mealsHtml = `
        <div class="meals" onClick ="getIngredients(${mealsData.idMeal})">
            <div class="meal-img">
                <img src=${mealsData.strMealThumb} alt=${mealsData.strMeal}>
            </div>
            <div class="meal-name">
               ${mealsData.strMeal}
            </div>
        </div>
    `;
        mealList.innerHTML = mealsHtml;
        mealContiner.appendChild(mealList);

    });
}

let getIngredients = (id) => {
    fetch(` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => displayIngredients(data.meals[0]))
}


//showing ingredients in below the same page
let displayIngredients = (ingredients) => {
    let mealName = ingredients.strMeal;
    let mealImage = ingredients.strMealThumb;
    let info = document.getElementById('info');
    let mealsHTML = `
    <div class="image">
            <img src =${mealImage} alt=${mealName}>
        </div>
        <div class="image-name padding">
            <h1>${mealName}</h1>
        </div>
        <div class="padding ingredients-list">
            <h3>Ingredients</h3>
            <ul>
                <li><i class="fas fa-check-square"></i> ${ingredients.strMeasure1} ${ingredients.strIngredient1}</li>
                <li><i class="fas fa-check-square"></i> ${ingredients.strMeasure2} ${ingredients.strIngredient2}</li>
                <li><i class="fas fa-check-square"></i> ${ingredients.strMeasure3} ${ingredients.strIngredient3}</li>
                <li><i class="fas fa-check-square"></i>${ingredients.strMeasure4} ${ingredients.strIngredient4}</li>
                <li><i class="fas fa-check-square"></i>${ingredients.strMeasure5} ${ingredients.strIngredient5}</li>
                <li><i class="fas fa-check-square"></i>${ingredients.strMeasure6} ${ingredients.strIngredient6}</li>
                <li><i class="fas fa-check-square"></i> ${ingredients.strMeasure7} ${ingredients.strIngredient7}</li>
                <li><i class="fas fa-check-square"></i> ${ingredients.strMeasure8} ${ingredients.strIngredient8}</li>
               
            </ul>
        </div>
    `;
    info.innerHTML = mealsHTML;
}