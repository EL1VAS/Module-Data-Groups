// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
function listedRecipe(recipe) {
    const ingredientsList = recipe.ingredients.join("\n"); //Join ingredients with a new line
    return `${recipe.title}, "serves", ${recipe.serves}, "ingredients:", ${ingredientsList}`;
}
const recipe = {
    title: "bruschetta",
    serves: 2,
    ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(listedRecipe(recipe));
