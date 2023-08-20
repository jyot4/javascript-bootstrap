const list = document.getElementById('recipeList');
const paragraph = document.getElementById('recipeReadyInMinutes');


fetch( "https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes")
.then(response => response.json())
.then(result=> console.log(result))
