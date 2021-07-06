fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e1d997129cmshf59cf48b4e359ddp1de771jsn5032e03d50f4",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});