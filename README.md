# ![Pumpkin](assets/img/pumpkin_orange.svg) MS2-Hallowed Hunt ![Pumpkin](assets/img/pumpkin_orange.svg)

## _A memory card game for young and old alike!_

Welcome to a Halloween themed memory card game,available to play in three levels. Pair up matching cards to complete the board in the shortest amount of time and moves. No game is the same!

## Table of Contents

1. **UX**
   - Project Goals
   - Player Goals
   - Developer and Business Goals
   - User Stories
   - Design choices
   - Wireframes

2. **Features**
      - Existing Features
      - Features left to implement
  
3. **Technologies Used**
4. **Testing**
5. **Deployment**
6. **Credits**
   - Content
   - Media
   - Code
   - Acknowledgements
  
## ![Pumpkin](assets/img/pumpkin_orange.svg) UX

### Project Goals

The main goal of this game is to provide a fun and challenging memory game for young and old alike to enjoy.  
It is designed to test the user’s memory and ability to match up pairs as quickly and efficiently as possible. The replay value is endless as the cards will reshuffle into a new arrangement at the end of every game.

This website has been designed mainly with the desktop user in mind, although the easy level should be playable on a tablet.The amount of cards in the ‘Medium’ and ‘Hard’ level may not carry well onto devices smaller than a tablet.

### Player goals

The target audience is users over the age of seven with different difficulty levels available to experience.

Players goals are:

- A fun game to play.
- The ability to choose their difficulty level, thereby, hopefully, engaging even the sharpest mind.
- Easy to understand the rules of the game.
- Easy to navigate the game board.
- Fun and engaging images that change at every level.
  
### Developer Goals

- To develop a game that all players across a wide range of ages will enjoy and stay engaged in for a happy amount of time.
- To learn how to use Javascript to make user interaction with an application more dynamic.
- To better understand the way that HTML, CSS and Javascript work together to achieve envisioned results.
- To add a bit of hidden fun to the game by placing an Easter Egg (secret-code: halloween)

### User Stories

As a player I would want:

1. To enjoy the visual aspects of the game and the theme applied.
2. To easily find out how to play the game.
3. To keep track of my score and time playing the game.
4. A mute button in order to switch the sound on an off easily.
5. To be able to select my level of difficulty at any stage of game play.

### Design Choices

I chose the Halloween theme and motive  firstly,  due to the of the time of year that I am building the game and secondly, my children are obsessed with Halloween and how better to engage my seven year old’s mind that wrapping a memory exercise in a game.

###### Colours

As_orange and black are popular colours around Halloween I stayed with these as my primary colours.

Other colours used were selected as compatible with the help of [colormind](https://colormind.io) and were roughly grey white and a bit of tan/gold.

###### Fonts

The fonts selected initially for the game were **Creepster, Griffy** and **Henny Penny** as they are popular Halloween fonts.

###### Styling

The cards and buttons were all styled with rounded corners as that is what you would expect from a deck of cards and it complements the Creepster font which has no sharp edges.

###### Images

Images for the cards and backgrounds were all in keeping with the Halloween theme.

Each level introduces new backgrounds and face cards, aimed at increasing visual pleasure around each level and helping the user to identify with the level they are on.

###### Audio files

To provide the feeling of sitting at a table with an actual deck of cards, a card flipping audio file has been used. This can be easily switched on and off by the user.

###### Wireframes

My wireframes were created using [Balsamiq](https://balsamiq.com/) during the Scope plane as part of my design and planning process.

[Click here to go to the Halloween Mockup](https://res.cloudinary.com/dgsqmdssi/image/upload/c_thumb,w_200,g_face/v1570185503/Hallowed-Hunt/Halloween_nlegnv.pdf)

## ![Pumpkin](assets/img/pumpkin_orange.svg) Features

### Existing Features

###### Opening Modal

- At the beginning of the game a modal appears allowing the user to choose their difficulty level to their believed capabilities.
- Users are able to change the level of difficulty at any stage in the game by selecting the “Change Level” button.
- This modal only appears when you first navigate to the page.

###### Level Indicator

The top right side of the page shows the user which level they are playing.

###### "How to play" button

- The user can hover over the button or click with their mouse and the basic instructions for playing the game will come into view.
- Once the users mouse leaves the button area the instructions will disappear again.

###### “Reset" button

- If the user hovers over this button it will open a tooltip letting the user know what will happen if they click the button.
- This button allows users to reset the game at any point and start over with a new shuffle.
- The button will also reset the counter and stop the clock.

###### “Moves” counter

- This starts when the user turns this first card and allows the user to keep track of how many moves it takes them to complete the game.
- Counts are based of every two cards turned over.
- If the user resets the game the counter will revert to zero.

###### “Time” counter

- The clock starts when the user turns the first card and will allow the user to keep track of how long it takes them to complete a game.
- If the user resets the game the counter will stop. It will start again from zero when the user turns the first card of the new game again.

###### Game Board

- The board is where the cards are displayed.
- The cards are displayed as follows:

      - 4 rows of 4 for the easy level
      - 4 rows of 6 for the medium level and
      - 6 rows of 6 for the hard level.

- Each level has a different background pictures.
- Images on the background pictures are grey and face cards are black to help the user differentiate between turned and unturned cards.

###### Success Modal

Once the game has been complete the user will be presented with the options:

- "Play again" ie. playing another game at the same level.
- "Change level" ie. allowing the user to chose a different level.
- "Exit Game" allowing the user to close the game.
  
###### Easter Egg (Konami code)

- There is a hidden Easter Egg(Konami code) in the game. This will appear if the user types in the word "halloween" any time while playing the game.
- The code for this has been seperated into the easteregg.js file.

### Features still to implement

###### Local storage

I think it would be nice to store the high score of the user on their local system to keep track of their best scores.

###### Success sounds for cards matching

The user might enjoy a sound that indicates that they have successfully made a match with their cards.

## ![Pumpkin](assets/img/pumpkin_orange.svg) Technologies Used

- HTML5, CSS3 and JavaScript were used as the programming languages for this project.
- [Visual Studio Code](https://code.visualstudio.com/) was used as the IDE for this project.
- [Bootstrap](https://getbootstrap.com/) Framework was used to help create the structure of the game and make the layout more responsive to different sized screens. [jQuery](https://jquery.com/) and [popper.js](https://popper.js.org/) were used as part of the Bootstrap Framework.  
- [GoogleFonts](https://fonts.google.com/) provided the fonts used in the game.
- [Fontawesome](https://fontawesome.com/) was used to provide the sound icon.
- [CSSMatic](https://www.cssmatic.com) is an online tool used to help design the box-shadow layout used in the CSS
- [Cloudinary](https://cloudinary.com) all external images for this project are stored at this cloud location.
- [Github](https://github.com/) was used to store and share all project code remotely.
- [CorelDraw X8](https://www.coreldraw.com/) used to manipulate and change colours of the svg images used for the playing cards.

## ![Pumpkin](assets/img/pumpkin_orange.svg) Testing

## ![Pumpkin](assets/img/pumpkin_orange.svg) Deployment

## ![Pumpkin](assets/img/pumpkin_orange.svg) Credits

### Content

[Code-sketch](https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw) this tutorial helped with me with the development of the game board part of the game.
[Javascript30.com](https://javascript30.com/) - the day 12 tutorial on this gave me the idea to add a little 'Konami" code to my game as a bit of fun.

### Media

[SVG SILH](https://svgsilh.com) - All images used on the cards were downloaded from this site.
[Freesound](https://freesound.org/) - Flipcard sound was downloaded from here.

### Code

[Code-sketch](https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw) - I duplicated the way she put the cards into the HTML and also some of her CSS code and JavaScript to help align the cards and get them to flip and shuffle.
[Stackoverflow](https://stackoverflow.com/) code was used for the [startTimer](https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript) function and also to show the [tooltip](https://stackoverflow.com/questions/35079509/bootstrap-button-tooltip-hide-on-click) only on hover and also to change the [tooltip inner](https://stackoverflow.com/questions/17642447/change-bootstrap-tooltip-color).
[Javascript30.com](https://javascript30.com/) - the Javascript for the Easter Egg was used and adjusted from day 12 of the tutorials.
[Bootstrap](https://getbootstrap.com/) was used to copy basic modals and then adjusted to suit purpose.

### Acknowledgement
