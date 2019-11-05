# Link
https://protected-island-84805.herokuapp.com/

# Clicky Game
A simple memory game where the player clicks on images and tries to not pick the same one twice.

# Problem
Make a game in React.js where player has to memorize which card(s) they have picked.

# Solution
Made a json file with all friend cards and gave each one an id. Once a card is clicked the cards are reshuffled and a "count + 1" is assigned to the card that was clicked. If that card is clicked again the "clickCheck" function will check if that card's "count" is still zero and if not then it runs the "gameoverDude" function. The latter function basically just moves the current score over to the highscore, resets the current score back to zero, resets all "counts" back to zero in essence resetting the game.

# Tech
- React.js
- JavaScript ES6
- JSON
- HTML 5
- CSS 3

# Instructions
Click any card twice to start game. Then try to remember which card you clicked and try not to click it again. Then see if you can "beat" the game by getting a maximum high score of 12.

# Getting Started
Click on green button "Clone or download" and copy link. Run a "git clone {link}" in [Git Bash](https://gitforwindows.org/ "Git bash download page")(PC) or Terminal(Mac).

enter in "cd" space "name of app" and then run the following command:

```
npm install
```

This should install all necessary node modules

After installations are completed run the following command:

```
npm start
```
App should then start automatically in you default browser on http://localhost:3000/

# Prequisites
Just make sure you have a current updated browser.

# Credit
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
