
console.log("Time to make some Carbonara for 4\n");
console.log("Here are the ingredients needed:")

let spaghetti = 400;
let guanciale = 250;
let eggYolk = 6;
let cheese = 50;
let blackPepper = 4;
let water = 40;

console.log("Spaghetti:", spaghetti,"g");
console.log("Guanciale:", guanciale,"g");
console.log("Fresh egg yolks", eggYolk);
console.log("Aged grated Pecorino Romano Cheese:", cheese,"g");
console.log("Raw Black Pepper:", blackPepper,"g");
console.log("Water from cooking pasta:", 40,"g\n");

console.log("Steps:",) 
console.log("To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.")

let mixBowl = eggYolk + cheese;
console.log("Combine the egg yolks with the finely grated Pecorino Romano.")
console.log("Weight of ingredients:", mixBowl, "g\n");

let blackPepperBowl = blackPepper;
console.log("Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.")
console.log("Weight of ingredients:", blackPepperBowl, "g\n");

let guancialeBowl = guanciale
console.log("Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.")
console.log("Weight of ingredients:", guancialeBowl, "g\n");

let pastaBowl = spaghetti + guancialeBowl;
console.log("Cook the pasta with a pinch of salt in the water (guanciale is already very salty);set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.")
console.log("Weight of ingredients:", pastaBowl, "g\n");

pastaBowl += water;
console.log("Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:",
"this will create a creamy sauce with the pasta starch contained in that water.")
console.log("Weight of ingredients:", pastaBowl, "g\n");

console.log("TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.\n");

let dish = pastaBowl + mixBowl ;
console.log("Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.")
console.log("It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.")
console.log("Weight of ingredients:", dish, "g\n");

dish + blackPepperBowl;
console.log("Add the remaining roasted black pepper and serve immediately.")
console.log("Weight of ingredients:", dish, "g\n");

console.log("Taadaa!!", "Buon Appetito!")