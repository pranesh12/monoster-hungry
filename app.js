// https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken
let input = document.getElementById("input");
let searchButton = document.getElementById("button");

searchButton.addEventListener("click", () => {
    var inputValue = input.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data));

})

//Displaying Meals in the front page
let displayData = data => {
     let meals = data.meals.slice(0, 12);
    let mealContiner = document.getElementById("meal-container");


    meals.forEach(mealsData => {
        let mealList = document.createElement("div");
        // console.log(mealsData.idMeal)
        let mealsHtml = `
        <div class="meals" onClick ="showIngredients(${mealsData.idMeal})">
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

let showIngredients = (id) => {
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    fetch(` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => displayIngredients(data.meals[0]))
}

let displayIngredients = (ingredients) => {
    let mealName = ingredients.strMeal;
    let list = ingredients.strMeasure1;
    let mealImage = ingredients.strMealThumb;
    console.log(mealImage)
    console.log(list);
console.log(ingredients)
}