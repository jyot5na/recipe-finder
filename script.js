async function searchRecipes() {
    const query = document.getElementById("search-input").value;
    const apiKey = "6ecd0a75a3c041dfa6a1e8c7e8dbf1e4"; // Replace with your API key
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}`);
    const data = await response.json();
    displayResults(data.results);
}

function displayResults(recipes) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
        `;
        resultsContainer.appendChild(recipeDiv);
    });
}