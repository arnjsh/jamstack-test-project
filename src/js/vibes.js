const vibes = [
"World is a playfield of the Strong...Weak make good pawns!",
"Awake, arise and stop not till the goal is reached",
"What is it that can even touch you if the maker has your back?",
"Dive in to feel the water"
];

var vibe = vibes[Math.floor(Math.random() * (vibes.length))];

document.querySelector(".vibe").append(vibe);