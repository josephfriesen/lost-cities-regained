# Lost Cities, Regained

### _Created By_ **Joe Friesen**

## Description

This application is an online implementation of the card game [Lost Cities](https://www.thamesandkosmos.com/index.php/product/category/games/lost-cities-card-game). Users will be able to create an account, start/join games, and play two-player games with other users.

Application built for Epicodus final capstone project.

## Screenshots

State of the app thus far (a few tweaks here or there still to be added):
![TBD]('.src/assets/tbd.png')

## Development Planning

### Project Proposal

Proposal for Lost Cities, Regained submitted 11/28/2018

##### Project's Name:
Lost Cities, Regained

##### Project's Purpose or Goal:
An online, realtime implementation of Lost Cities, a simple two-player card game, built in React.

##### Minimum Features:
* A fully playable game: Deal cards, logic for game, hand and turn management, and final scoring.
* Database/Hosting: Game state data persists in a cloud-based database, with changes to game state (e.g. user plays a card from his/her hand) updating the database and, subsequently, UI elements automatically.
* User authentication: A player is authenticated on their machine, and is registered as a player in a new game.

##### Required Tools:
* React / React-DOM / React-Router
* Redux / React-Redux
* Unit testing: Jest
* Module bundler: Webpack
* BaaS: Heroku -- Haven't committed to using Heroku as of yet, waiting to see how next week's in class work goes.
* Styling: HTML / CSS / Sass / PostCSS / Styled Components
* JavaScript: ES6 / JSX with Babel transpiler

##### Further Features:
* Game lobby: A single page to start a new game, list all active games, and join an active game with an open player slot.
* In-game chat feature.
* Animations for dealing/playing/discarding cards, end of round scoring, end game screen, in-game notifications. React-motion and React-spring libraries likely to be helpful here.
* Optimization for mobile.

##### Additional Tools:
* Animation libraries: React-motion, React-spring look interesting but would like to do more research to see which works best.
* Mobile: React-Native.
* Database manipulation: Interested in looking into GraphQL/Apollo.

### Component Structure

![Component graph](./src/assets/componentgraph.jpg)

### Notes

## Installation Instructions

* *Clone this repository:*
  * In terminal, enter the following:
```
$ cd ~/desktop
$ git clone https://github.com/josephfriesen/lost-cities-regained.git
$ cd lost-cities-regained
```
* *Build:*
  * In terminal, enter
```
$ npm install
$ npm run start
```
* *Open:*
  * In a browser, navigate to *localhost:8080/*

### Legal

Copyright (c) 2018 [Joseph Friesen](mailto:friesen.josephc@gmail.com)
