const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let whileI = 0
while (whileI < ingredients.length) {
  console.log(ingredients[whileI])
    whileI++
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}

for (let i = 0; i < ingredients.length; i++) {
  ingredients.reverse()
  console.log(ingredients[i])
}


