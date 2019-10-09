# ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg) MS2-Hallowed Hunt ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg)

---

## _A memory card game for young and old alike!_

Welcome to a Halloween themed memory card game, available to play in three levels. Pair up matching cards to complete the board in the shortest amount of time and moves. No game is the same!

---

## Table of Contents

1. ### UX

   - [Project Goals](#project-goals)
   - [Player Goals](#player-goals)
   - [Developer Goals](#developer-goals)
   - [User Stories](#user-stories)
   - [Design choices](#design-choices)
   - [Wireframes](#wireframes)

2. ### Features

      - [Existing Features](#existing-features)
      - [Features still to implement](#features-still-to-implement)
  
3. ### Technologies Used

4. ### Testing

   - [Manual Testing](#manual-testing)
   - [Automated Testing](#automated-testing)
   - [Bugs](#bugs)

5. ### Deployment

6. ### Credits

   - [Content](#content)
   - [Media](#media)
   - [Code](#code)
   - [Acknowledgements](#acknowledgements)
  
## ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg) UX

---

### Project Goals

The main goal of this game is to provide a fun and challenging memory game for young and old alike to enjoy.  
It is designed to test the User’s memory and ability to match up pairs as quickly and efficiently as possible. The replay value is endless as the cards will reshuffle into a new arrangement at the end of every game.

This website has been designed mainly with the desktop User in mind, although the easy level should be playable on a tablet. The amount of cards in the ‘Medium’ and ‘Hard’ level may not carry well onto devices smaller than a tablet.

### Player goals

The target audience is Users over the age of seven with different difficulty levels available to experience.

Players goals are:

- A fun game to play.
- The ability to choose their difficulty level, thereby, hopefully, engaging even the sharpest mind.
- Easy to understand the rules of the game.
- Easy to navigate the game board.
- Fun and engaging images that change at every level.
  
### Developer Goals

- To develop a game that all players across a wide range of ages will enjoy and stay engaged in for a happy amount of time.
- To learn how to use Javascript to make User interaction with an application more dynamic.
- To better understand the way that HTML, CSS and Javascript work together to achieve envisioned results.
- To add a bit of hidden fun to the game by placing an Easter Egg (secret-code: "halloween")

### User Stories

As a player I would want:

1. To enjoy the visual aspects of the game and the theme applied.
2. To easily find out how to play the game.
3. To keep track of my score and time playing the game.
4. A mute button in order to switch the sound on an off easily.
5. To be able to select my level of difficulty at any stage of game play.

### Design Choices

I chose the Halloween theme and motive  firstly,  due to the of the time of year that I am building the game and secondly, my children are obsessed with Halloween and how better to engage my seven year old’s mind that wrapping a memory exercise in a game.

#### Colours

As orange and black are popular colours around Halloween I stayed with these as my primary colours.

Other colours used were selected as compatible with the help of [colormind](https://colormind.io) and were roughly grey white and a bit of tan/gold.

#### Fonts

The fonts selected initially for the game were **Creepster, Griffy** and **Henny Penny** as they are popular Halloween fonts. On the final deployment I selected to only use the Creepster font as it was the closest I felt to my theme and also the most legible to read for the User. The Griffy font was used as a one off with the Konami clue that appears every time you start a new game.

#### Styling

The cards and buttons were all styled with rounded corners as that is what you would expect from a deck of cards and it complements the Creepster font which has no sharp edges.

#### Images

Images for the cards and backgrounds were all in keeping with the Halloween theme.

Each level introduces new backgrounds and face cards, aimed at increasing visual pleasure around each level and helping the User to identify with the level they are on.

#### Audio files

To provide the feeling of sitting at a table with an actual deck of cards, a card flipping audio file has been used. This can be easily switched on and off by the User.

#### Wireframes

My wireframes were created using [Balsamiq](https://balsamiq.com/) during the Scope plane as part of my design and planning process.

[Click here to go to the Halloween Mockup](https://res.cloudinary.com/dgsqmdssi/image/upload/c_thumb,w_200,g_face/v1570185503/Hallowed-Hunt/Halloween_nlegnv.pdf)

Although the game was originally designed to have levels of 12, 24 and 36 cards, this was later changed as it would have made the cards on the game boards too small. This may have impacted User enjoyment and the final cards selected were 12,18 and 24.

## ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg) Features

---

### Existing Features

#### Opening Modal

- At the beginning of the game a modal appears allowing the User to choose their difficulty level to their believed capabilities.
- Users are able to change the level of difficulty at any stage in the game by selecting the “Change Level” button.
- This modal only appears when you first navigate to the page.

#### Level Indicator

The top right side of the page shows the User which level they are playing.

#### "How to play" button

- The User can hover over the button or click with their mouse and the basic instructions for playing the game will come into view.
- Once the User's mouse leaves the button area the instructions will disappear again.

#### “Reset" button

- If the User hovers over this button it will open a tooltip letting the User know what will happen if they click the button.
- This button allows Users to reset the game at any point and start over with a new shuffle.
- The button will also reset the counter and stop the clock.

#### “Moves” counter

- This starts when the User turns this first card and allows the User to keep track of how many moves it takes them to complete the game.
- Counts are based on every two cards turned over.
- If the User resets the game the counter will revert to zero.

#### “Time” counter

- The clock starts when the User turns the first card and will allow the User to keep track of how long it takes them to complete a game.
- If the User resets the game the counter will stop. It will start again from zero when the User turns the first card of the new game again.

#### Game Board

- The board is where the cards are displayed.
- The cards are displayed as follows:

      - 4 rows of 4 for the easy level
      - 4 rows of 6 for the medium level and
      - 6 rows of 6 for the hard level.

- Each level has a different background pictures.
- Images on the background pictures are grey and face cards are black to help the User differentiate between turned and unturned cards.

#### Success Modal

Once the game has been complete the User will be presented with the options:

- "Play again" ie. Playing another game at the same level.
- "Change level" ie. allowing the User to choose a different level.
- "Exit Game" allowing the User to close the game.
  
#### Easter Egg (Konami code)

- There is a hidden Easter Egg(Konami code) in the game. This will appear if the User types in the word "halloween" any time while playing the game.
- The code for this has been separated into the easteregg.js file.

### Features still to implement

#### Local storage

I think it would be nice to store the high score of the User on their local system to keep track of their best scores.

#### Success sounds for cards matching

The User might enjoy a sound that indicates that they have successfully made a match with their cards.

#### Background music

The User might enjoy some spooky background music to set the mood, especially at the beginning.

## ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg) Technologies Used

---

- HTML5, CSS3 and JavaScript were used as the programming languages for this project.
- [Visual Studio Code](https://code.visualstudio.com/) was used as the IDE for this project.
- [Bootstrap](https://getbootstrap.com/) Framework was used to help create the structure of the game and make the layout more responsive to different sized screens. [jQuery](https://jquery.com/) and [popper.js](https://popper.js.org/) were used as part of the Bootstrap Framework.  
- [GoogleFonts](https://fonts.google.com/) provided the fonts used in the game.
- [Fontawesome](https://fontawesome.com/) was used to provide the sound icon.
- [CSSMatic](https://www.cssmatic.com) is an online tool used to help design the box-shadow layout used in the CSS
- [Cloudinary](https://cloudinary.com) all external images for this project are stored at this cloud location.
- [git](https://git-scm.com/) was used to commit saved sections as they were completed.
- [Github](https://github.com/) was used to store and share all project code remotely.
- [CorelDraw X8](https://www.coreldraw.com/) used to manipulate and change colours of the svg images used for the playing cards.

## ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg) Testing

---

### Manual Testing

This game has been specifically written for desktops at this time, as the number of cards on the medium and difficult levels translate poorly onto smaller devices. The minimum width of the game board on the hard level is 960px wide and 850px high, which is larger than most tablet sizes.

#### Testing on Desktop

Manual testing on each part of the game was done while building it. When a feature was built I tested it to see that it was doing what was required. Most of the testing was done with Chrome developer tools and checked over other browsers. Below is a breakdown of what was tested in each section:

##### Browser Testing

I tested the following browsers already installed on my computer:

- Chrome- worked with full funtionality and all features working as expected.
- Edge -  Game pages and boards worked as looked as expected. The index page buttons were not styled as expected but still functioned. It was also noted that the Konami code did not work on this browser.
- Mozilla Firefox -  Game pages and boards worked as looked as expected. The index page buttons were not styled as expected but still functioned.
- Internet Explorer - none of the functionality or features were working.
- Opera - Game pages and boards worked as looked as expected. The index page buttons were not styled as expected but still functioned.

I tested the game on my Ipad in Safari - the index page looked and worked as expected, but the game board did not. When the cards "flipped" over the face cards were not visible. This is a bug that will need to be sorted out in the near future so that it will be playable by Mac Users.

##### User Facing

###### How to play

- The "How to play" button was button was designed with a tooltip that appears when you hover over it.
- The tooltip had been styled with CSS so I needed to check that the tooltip appeared beneath the button styled as expected.:arrow_right: This was done by hovering over the tooltip with the mouse.

###### "Reset" button

- The reset button is designed to show a tooltip when hovered letting the User know what happens if they press the button.
- The tooltip had been styled with CSS and was checked manually by hovering over it with a mouse to check that this behaved as expected.
- On pressing the button several Javascript functions take over and do the following:
  1. "Unflips" all the cards ie. only the back of the cards are visible :arrow_right: this was checked visually when clicking the reset button.
  2. The "Moves" counter is reset to zero :arrow_right: this was tested by making a few matches and then pressing the reset button and making sure that the counter had reverted to zero.
  3. The button stops the clock. :arrow_right: this was again tested by making a few moves and then pressing the reset button and checking that the clock stops counting upwards.
  4. The button restarts the clock once a new game is started :arrow_right: this was tested by playing a few moves, pressing the reset button to stop the clock and then turning a card of a new game to confirm that the clock started again from zero.
  5. Shuffles all the cards into a new random sequence :arrow_right: this was tested by playing a few cards, resetting and checking that the cards were at a different location. Also, full games were played and reset to check that cards were randomly arranged.

###### Sound button

- The sound button toggles between off and on using JavaScript, allowing the User to switch off the sound and switch it on again. :arrow_right: This was checked by starting a game and flipping a card to hear the sound, then pushing the button and:
  1. Visually checking that the word had changed from "On" to "Off" and back again if pressed again.
  2. Comparing the "On" to be with sound and then the "Off" to be with no sound.

###### "Moves" Counter

- This is an information point for the User that counts the number of moves it is taking the User to complete the game board.
- The counter "counts" every pair of cards that are flipped by the User. ie two cards need to be flipped in order to count as one move.
- This was a bit of JavaScript and was visually tested on the User side :arrow_right: by selecting one card and then another and making sure that it only went up by an increment of one for every pair turned over whether they were matching or not.
- :arrow_right: Also clicked multiple cards in a row to make sure that it was only counting the flipped cards and not accidental clicks as well.

###### "Change level"

- This is a simple dropdown menu that allows the User to navigate at any time before, during or after a game to a different level.
- As the dropdown list was hidden from view a little JavaScript was used to make it visible again when hovering over the change level button.
- Also the dropdown menu also had to be hidden again if the User did not make a selection and  moved the mouse off the button.
- :arrow_right: Functionality was tested visually by hovering over the dropdown menu, moving the mouse away to check that the menu became hidden again,
- :arrow_right: Links were tested to make sure that they were working and took the User to the selected game board when a selection was made.

###### Timer

- The timer is designed that it only starts the clock once the first card in a new game has been selected. :arrow_right: This was checked by waiting before turning the first card to make sure that the clock wasn't running and then checking that it started running as soon as the first card was turned.
- The timer is designed to stop running if the game has been successfully completed. :arrow_right: This was checked by playing several games to completion and checking that the counter stopped every time it was successfully completed.
- The timer is designed to stop running when the game is reset. :arrow_right: This was checked by reseting the game at various stages in the game and ensuring that the clock was stoped and no longer running.

###### Konami Code

This was added to the game as a bit of hidden fun for the User. :arrow_right: This was tested by entering the secret code: "halloween" at random junctures to see that it popped up and closeable again. Try it yourself :stuck_out_tongue_winking_eye:

##### JavaScript

I used the console a lot while writing the JavaScript to make sure:

- that functions were being called
- that the correct information was being pulled from the DOM.
- for debugging when code wasn't working to start off with or had suddenly stopped working due to something else that I was added onto the code that was breaking it.

I did attempt to start my project using Test Driven Development by writing tests with Jasmine, but my inexperience and minimal understanding of this tool led to frustration and I was unable to write a passing test. I was informed that Jasmine is not the best tool to test DOM manipulation, which, for the most part what my game does.

### Automated Testing

#### Validation Services

The following validation services were used to check the HTML and CSS code:

- [W3C Validator](https://validator.w3.org/) was used for the HTML.
- [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) was used to check the CSS

The following were used for checking my Javascript code:

- [JSHint](https://jshint.com/) - this did not like most of my code due to arrow functions and Array restructuring from some of my code.
- [Babel](https://babeljs.io/)- this helped me convert my code into simpler versions that earlier browsers would understand as a some of my code was using ES2016 and 2017 functions (arrow functions and destructuring assignments)

#### Jasmine

I did attempt to start my project using Test Driven Development by writing tests with Jasmine, but my inexperience and minimal understanding of this tool led to frustration and I was unable to write a passing test. I was informed that Jasmine is not the best tool to test DOM manipulation, which, for the most part what my game does.

### Bugs

#### Current bugs

- If the sound is switched off on the game and you change levels the sound comes back on.
- If you drag the card while clicking the card the card will not flip over. Only allows flip on still click- this was a problem for my son who is not as controlled on a mouse as some.
- Overclicking on cards does not stop the flip sound.
- The timer does not go back to zero when the game is reset, however it does start counting again from zero, so does not impact game play.
  
#### Resolved bugs

- There was a bug on the hard level that caused the cards to stay flipped even when they weren't matched. This was resolved when I moved all my code into one JS file.
- When navigating to the easy level, the start modal kept popping up. This was resolved by seperating the html and making the modal the index page.
- When moving the mouse after hovering over the dropdown list, the list would not go away if nothing was selected. This was resolved with a click function allowing the User to close the dropdown list again.

## ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg) Deployment

---

This project was developed using Visual Studio Code. Through the build completed sections were commited to git and then uploaded to my [Github repository](https://github.com/cvdebeer/MS2-Hallowed-Hunt).

In my repository I then deployed the site by doing the following:

1. I selected the "Settings" option on the top right of the dashboard.
2. I scrolled down to the "GitHub Pages" heading and under "source" changed the "none" from the dropdown menu to "master branch"
3. This caused the page to be deployed and available to view on a public [link](https://cvdebeer.github.io/MS2-Hallowed-Hunt/)

### How to run this project locally

To clone this project from GitHub:

1. Follow the link to the [GitHub repository](https://cvdebeer.github.io/MS2-Hallowed-Hunt/).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type 'git clone', and then paste the URL you copied in Step 3.

         - git clone https://github.com/USERNAME/REPOSITORY
7. Press Enter. Your local clone should be created.

## ![Pumpkin](https://res.cloudinary.com/dgsqmdssi/image/upload/v1570621003/Hallowed-Hunt/Pumpkin_orange_anrehj.svg) Credits

---

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

### Acknowledgements

- Thanks to my family , who have spent long hours without my company while I studied and wrote this game. They were also the inspiration behind the game.
- Thanks to A Greaves, who provided a beautiful template for writing this Readme - you are a master!
- Thanks to my mentor Rahul who encouraged me to understand JavaScript code. and walked me through the tough days.
  