// script.js
let timer;
let startTime;
let story;
let storyIndex = 0;
const easyStories = [
    "Once upon a time, there was a little bunny who loved to hop around the meadow.",
    "A dog and a cat became best friends and went on adventures together.",
    "In a small village, people planted a magical tree that grew candy."
];
const mediumStories = [
    "A scientist invented a device that could teleport objects across the world.",
    "During a summer camp, kids discovered a hidden treasure map in the forest.",
    "An explorer traveled to the North Pole and encountered a hidden civilization of polar bears."
];
const hardStories = [
    "In the distant future, humans colonized Mars and discovered ancient alien artifacts buried beneath the surface.",
    "A detective solved a complex case involving multiple dimensions and time travel.",
    "An artist created a masterpiece using a technique that combined light and shadow in unprecedented ways."
];

function getRandomStory() {
    const difficulty = document.getElementById('difficulty').value;
    if (difficulty === 'easy') {
        return easyStories[storyIndex % easyStories.length];
    } else if (difficulty === 'medium') {
        return mediumStories[storyIndex % mediumStories.length];
    } else {
        return hardStories[storyIndex % hardStories.length];
    }
}

function startTest() {
    document.getElementById('userInput').value = '';
    document.getElementById('storyDisplay').textContent = getRandomStory();
    document.getElementById('userInput').focus();
    startTime = new Date();
    if (timer) clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    document.getElementById('timer').textContent = `Time: ${elapsed}s`;
}

document.getElementById('startButton').addEventListener('click', startTest);
