let gameStage;
let choice;
let result;
let mainText;
let font1;
let song;
let button;
let button2;
let button3;
let returnButton;
let playButton;
let gameStarted = false;
function preload(){
  font1 = loadFont('assets/TradeWinds-Regular.ttf');
  font2 = loadFont('assets/SpecialElite-Regular.ttf');
  song = loadSound('assets/purple_planet.mp3');
  imageMe = loadImage('assets/mE.png');
  imageHouse = loadImage('assets/mE_Artboard 2.png');
  imageMoon = loadImage('assets/mE-03.png');
  imageTree = loadImage('assets/mE-04.png');
  imageScared = loadImage('assets/mE-05.png');
  imageCar = loadImage('assets/mE-06.png');
   imageDrug = loadImage('assets/mE-07-07.png');
  imageMurderer = loadImage('assets/mE-08.png');
  imageBush = loadImage('assets/mE-09.png');
 imageHostage = loadImage('assets/mE-10.png');
  imageWin = loadImage('assets/mE-11.png');
  imageHandcuff = loadImage('assets/mE-12.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
 
  // establish initial game stage
  mainText = new userChoice("No Path Left Unturned");
  gameStage = "title";
  
//button for saving image
   button = createButton("Save Certificate of Accomplishment");
  button.parent("button-holder");
  button.mousePressed(saveDrawing);
  button.position(width*0.385,height*0.65,"fixed");
  button.hide();
  
//button for artist statement
  button2 = createButton("Artist Statement");
  button2.parent("button-holder");
  button2.mousePressed(showArtistStatement);
  button2.position(width*0.45,height*0.6,"fixed");
  button2.hide();
 
  // Create the return button
  returnButton = createButton("Return to Home Screen");
  returnButton.position(width * 0.425, height * 0.7); 
  returnButton.mousePressed(returnToTitle); 
  returnButton.hide(); 
  
  //button for artist statement
  button3 = createButton("Credits");
  button3.parent("button-holder");
  button3.mousePressed(showCredits);
  button3.position(width*0.45,height*0.65,"fixed");
  button3.hide();
  
  //play button
  playButton = createButton("Play");
  playButton.parent("button-holder");
  playButton.mousePressed(startGame);
  playButton.position(width*0.45,height*0.55,"fixed");
  playButton.hide();
}
function returnToTitle() {
  gameStage = "title";  
  button.hide();  
  returnButton.hide(); 
}

function draw() {
  background(220);
  switch (gameStage) {
    case "title":
      mainText.titleDisplay();
      break;
    case "info":
      mainText.infoDisplay();
      break;
     case "tw":
      mainText.twDisplay();
      break;
    case "info2":
      mainText.info2Display();
      break;
    case "stage1":
      mainText.stage1Display();
      break;
    case"stage1a":
      mainText.stage1aDisplay();
      break;
    case"stage1b":
      mainText.stage1bDisplay();
      break;  
    case "stage2":
      mainText.stage2Display();
      break;
    case "stage2a":
       mainText.stage2aDisplay();
      break;
    case "stage3":
       mainText.stage3Display();
      break;
    case "stage3a":
       mainText.stage3aDisplay();
      break;
    case "stage4":
       mainText.stage4Display();
      break;
    case "stage4a":
       mainText.stage4aDisplay();
      break;
    case "stage4b":
       mainText.stage4bDisplay();
      break;
    case "stage5":
       mainText.stage5Display();
      break;
    case "artistStatement":
      artistStatementDisplay(); 
      break;
     case "showCredits":
      showCreditsDisplay(); 
      break;
    case "gameOver":
      gameOver();
      break;
  }
} 

function showArtistStatement() {
  gameStage = "artistStatement"; 
  button2.hide(); 
}
function artistStatementDisplay() {
  button3.hide();
  playButton.hide();
  background('#f1f1f1');  
  fill('#000');
  textAlign(CENTER);
  textSize(30);
  textFont(font2);
  text("Artist Statement", width * 0.495, height * 0.1);
  textSize(20);
  text("Telling stories is the root of most art, whether communicated through words or through symbols of illustrations. I have decided to create an interactive experience of what it is like to be a woman walking home late at night. I think that the game is entertaining in the way that the choices are connected and how interactive it is for the player. It also covers the real struggle and battle that women face at night. It is almost habitual to expect an attack at night, so the list of scenarios in the game are actually personal thoughts that go throughout my own head. I am a Persian and Arab woman who used to have a different birth name, so I decided to embrace my heritage by using that name in this game as the main character, Yalda.", width * 0.225, height * 0.3,950);
 returnButton.show();
}
function showCredits(){
  gameStage = "showCredits"; 
  button3.hide(); 
}
function showCreditsDisplay(){
  button2.hide();
  playButton.hide();
  background('#f1f1f1');
  fill('#000');
  textAlign(CENTER);
  textSize(30);
  textFont(font2);
  text("Credits", width * 0.495, height * 0.1);
  textSize(20);
  text("Created by Julia Johansson", width * 0.225, height * 0.3,950);
  text("Purple Planet Music", width * 0.225, height * 0.4,950);
  returnButton.show();
}
function startGame(){
  song.stop();
  gameStarted = true;
  gameStage = "info";  
  song.loop();
  playButton.hide();   
}

function mouseReleased() {
  switch (gameStage) {
    case "info":
      gameStage = "tw";  
      break;
      case "tw":
      gameStage = "info2";  
      break;
    case "info2":
      gameStage = "stage1"; 
      break;
    case "stage1":
      if (mouseX < width / 2) {
        choice = false;
      } else {
        choice = true;
      }
      if (choice) {
        gameStage = "stage2";
      } else if (!choice) {
        result = "bad";
        gameStage = "stage1a";
      }
      break;
    case"stage1a":
        if (mouseX < width / 2) {
        choice = true;
      } else {
        choice = false;
      }
      if (choice) {
        gameStage = "stage1b";
      } else if (!choice) {
        result = "bad";
        gameStage = "gameOver";
      }
      break;
    case "stage1b":
      if (choice) {
        gameStage = "stage2";
      } 
      break;
    case "stage2":
      if (mouseX < width / 2) {
        choice = false;
      } else {
        choice = true;
      }
      if (choice) {
        result = "good";
        gameStage = "stage2a";
      } else if (!choice) {
        result = "bad2";
        gameStage = "gameOver";
      }
      break;
    case "stage2a":
      if (choice) {
        result = "good";
        gameStage = "stage3";
      } 
      break;
    case "stage3":
      if (mouseX < width / 2) {
        choice = true;
      } else {
        choice = false;
      }
      if (choice) {
        result = "good";
        gameStage = "stage3a";
      } else if (!choice) {
        result = "bad3";
        gameStage = "gameOver";
      }
      break;
    case "stage3a":
      if (choice) {
        result = "good";
        gameStage = "stage4";
      }
      break;
    case "stage4":
      if (mouseX < width / 2) {
        choice = true;
      } else {
        choice = false;
      }
      if (choice) {
        result = "good";
        gameStage = "stage4a";
      } else if (!choice) {
        result = "good";
        gameStage = "stage4b";
      }
      break;
    case "stage4a":
      if (choice) {
        result = "good";
        gameStage = "stage5";
      } 
      break;
     case "stage4b":
      if (mouseX < width / 2) {
        choice = true;
      } else {
        choice = false;
      }
      if (choice) {
        result = "bad4";
        gameStage = "gameOver";
      } else if (!choice) {
        result = "bad5";
        gameStage = "gameOver";
      }
      break;
    case "stage5":
      if (mouseX < width / 2) {
        choice = true;
      } else {
        choice = false;
      }
      if (choice) {
        result = "";
        gameStage = "gameOver";
      } else if (!choice) {
        result = "bad6";
        gameStage = "gameOver";
      }
      break;
    case "gameOver":
      gameStage = "title";
      result = null;
      choice = null;
      button.hide(); 
      return;  
  }
}
class userChoice {
  constructor(textContent) {
    this.textContent = textContent;
  }
  
  titleDisplay() {
    background('#191c7d');
    fill('#9b98d4');
    image(imageTree,width*-0.125,height*-0.125,1050,1250);
    image(imageMe,width*0.125,height*0.335,350,550);
    image(imageHouse,width*0.525,height*0.05,850,1050);
    image(imageMoon,width*0.625,height*-0.3,550,750);
    this.textContent = "No Path Left Unturned";
    textAlign(CENTER);
    text(this.textContent, width*0.525, height*0.35);
    textSize(100);
    textFont(font1);
    playButton.show();
    button2.show();
    button3.show();
  }
  infoDisplay(){
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#323dd1');
    fill('#aaaee6');
    this.textContent = "";
    textAlign(CENTER);
    textSize(35);
    textFont(font2);
    text("  Yalda, a young woman, gets off of work at the local pharmacy at midnight every shift. Each night she is given a ride by either her friend, coworker, partner, or family. Unfortunately, no one is available to come and take her home tonight. She considers calling an uber but her last experience with one left her uncomfortable to try again.",width*0.19, height*0.15,950)
      text(  "  Join Yalda’s journey as she tries to make it home safely. Your choices affect the outcome of her life tonight, so please choose your choices wisely. One wrong move will send her in the wrong direction! Keep her safe and good luck guardian angel! ", width*0.19, height*0.65,950);
  }
  twDisplay(){
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#323dd1');
    fill('#aaaee6');
    this.textContent = "";
    textAlign(CENTER);
    textSize(35);
    textFont(font2);
    text(" TRIGGER WARNING!!",width*0.19, height*0.15,950);
    text(" *Please read before continuing*",width*0.19, height*0.35,950)
    text(  "  Some content may not be suitable for the player. There is text and imagery that might be triggering. Content includes allusions to rape and murder. The purpose of the game is to create a simulation of the female experience of walking home alone at night. If unsure of the game's intentions, please read the artist statement available on the home page. ", width*0.19, height*0.45,950);
  }
  info2Display(){
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#323dd1');
    fill('#aaaee6');
    this.textContent = "";
    textAlign(CENTER);
    textSize(35);
    textFont(font2);
    text("  Yalda, a young woman, gets off of work at the local pharmacy at midnight every shift. Each night she is given a ride by either her friend, coworker, partner, or family. Unfortunately, no one is available to come and take her home tonight. She considers calling an uber but her last experience with one left her uncomfortable to try again.",width*0.19, height*0.15,950)
      text(  "  Join Yalda’s journey as she tries to make it home safely. Your choices affect the outcome of her life tonight, so please choose your choices wisely. One wrong move will send her in the wrong direction! Keep her safe and good luck guardian angel! ", width*0.19, height*0.65,950);
  }
  stage1Display() {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#2d5f61');
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width*1, height/2);
    mouseHighlight();
    stroke(0);
    fill(0);
    textSize(35);
    text("Yalda has just clocked out, cleaned the store, sorted the pills, and is on her way out. As she stands outside in the dark, locking the door, she hears some rustling in the bushes. It turns out that it is a man, around 40s, white, who jogs lightly over to Yalda. The man asks her if she could open the shop back up to purchase some cough syrup for his sick kid. ", width *0.2, height*0.125,950); 
    textSize(30);
    text("Yes! It won’t take very long and it would be the right thing to do.", width*0.15,height*0.65,225);
    text("No, it is against store policy to be open past closing time.",width*0.7,height*0.65,225);
    
  }
    stage1aDisplay(){
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#17598f');
    fill('#bfd0de');
    this.textContent = "";
     textAlign(CENTER);
    text(this.textContent, width/2, height/2);
     mouseHighlight();
    stroke(0);
    fill(0);
    text("Yalda let the man in, turning on the lights back up and getting behind the register. Yalda watches as he looks around, eyeing the meds. Eventually he makes it over to the miscellaneous items, which includes an assortment of knives. She gets a bit nervous noticing that he hasn’t chosen the cough syrup yet.", width*0.2, height*0.125,950);
    text("Yalda politely asks him to make his choices, since she is doing him a favor and is supposed to have already closed up for the night.", width*0.12,height*0.55, 450);
      text("Continue to wait.", width*0.60,height*0.55, 450);
  }
  stage1bDisplay() {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    stroke(0);
    fill(0);
    text("He seems to have grabbed something by mistake as it is not the cough syrup, but a pocket knife. He makes his way over to the register, leaving a 20 dollar bill which is way more than the price of the item. He eyes Yalda for a moment, before leaving without a word. Yalda closes up the shop.", width*0.21, height*0.37, 950);
  }
   stage2Display() {
     returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#6c3770');
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    mouseHighlight();
    stroke(0);
    fill(0);
    text("As Yalda starts walking back home she notices a second set of footsteps behind her, so she starts speeding up her pace. She looks by the side of the road and sees that there is in fact a shadow behind her. She hears a few grunts before she decides to cross the street. As she makes her way over to the curb she decides not to turn around, as she is afraid it might slow her down. ", width*0.19, height*0.15,950);
     text("Not walk, but run across the street, that man from earlier might be stalking Yalda.", width*0.10,height*0.65, 465);
      text("Take your time to cross the street, checking both ways for cars as you walk.", width*0.60,height*0.65, 465);
  }
     stage2aDisplay() {
       returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    stroke(0);
    fill(0);
    text("As Yalda makes it safely across the street, she looks back to the other side to see who it was. It was a young woman, with glasses and a backpack, walking hurriedly while clutching her phone. She sighs in relief and continues on her journey. She eventually makes it to a bus stop, considering whether or not to wait for the bus. ", width*0.2, height*0.40, 950);
  }
  stage3Display() {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#4576bf');
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    mouseHighlight();
    stroke(0);
    fill(0);
     text("She sees a bus stop with a man sitting smoking a cigarette. She considers whether or not to sit as well, as it is very cold and she is growing tired. As she gets closer she sees that he has manspread all over the bench, so she decides to stand for a moment. She checks the app for the waiting time for the bus and it is 45 min long. ",width*0.18,height*0.15,950);
     text("Yalda should wait for the bus, it is too cold to walk that far.", width*0.15,height*0.55, 300);
      text("It would be bad enough to just wait in the cold for 45 min, might as well walk and get moving.", width*0.65,height*0.55, 300);
  }
stage3aDisplay() {
  returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    stroke(0);
    fill(0);
    text("The man minds his business, using his headphones, as Yalda does the same. They get on to the bus, and Yalda sits in the very front next to the bus driver. She waits as the bus makes it to the stop that is closest to her home, she still has to walk another 20 min.", width*0.2, height*0.4, 950);
}
  stage4Display() {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#bf8045');
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    mouseHighlight();
    stroke(0);
    fill(0);
   text("As Yalda starts to walk she notices that a man gets off the bus at the last minute. She gets nervous so she stops for a moment, going on her phone so that he can walk ahead. He doesn’t seem to budge though. She waits a bit longer but notices that he starts walking over. He stops and asks her the directions to the nearest corner store. After she helps him he begins to make his way. She waits a moment and then walks. After about 5 min, she notices that the man is still walking behind her, that he has missed his stop. She considers correcting him, but decides to mind her business. She starts to feel nervous though. ", width*0.16, height*0.1,1050);
     text(" Continue to walk in the direction of her home, the faster she gets to her apartment the better. ", width*0.1,height*0.7, 450);
      text("Walk a different trail, so he doesn’t see where Yalda lives.", width*0.63,height*0.7, 450);
}
  stage4aDisplay() {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    stroke(0);
    fill(0);
   text("She continues walking and notices that the man is still behind her. She makes it to the front of her apartment and quickly shuts the front door behind her. He tries to rush after her but it locks. He stands outside, watching her go up the stairs, trying to see which door she walks into. She decides to take the elevator instead for the rest of the floors. ", width*0.18, height*0.35, 950);
}
stage4bDisplay() {
  returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#45bfa5');
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    mouseHighlight();
    stroke(0);
    fill(0);
   text(" Eventually Yalda hits a dead end. She looks around at the house and decides to enter one of the buildings. He still remains behind her. She knocks at a random person’s door, hoping she could hide there for a moment but she doesn’t know anyone. When they don’t answer she knocks on another door. After some time she gives up and decides to exit the building. She sees him standing across the street staring at her. She picks up her pace but he starts to jog. She starts jogging as well and makes it down the road. She sees a car and tries to flag for it to slow down. She sees that the man pulls something out of his pocket that resembles a knife. ", width*0.17, height*0.1,1050);
     text(" Step in the path of the car so they have no choice but to stop and help her.  ", width*0.16,height*0.65, 300);
      text("Continue to flag the car down.", width*0.62,height*0.65, 300);
}
  stage5Display() {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#4d45bf');
    this.textContent = "";
    textAlign(CENTER);
    text(this.textContent, width/2, height/2);
    mouseHighlight();
    stroke(0);
    fill(0);
   text(" When she gets to her floor she opens her door, making it inside. She debates what to do first. ", width*0.3, height*0.15,575);
     text(" Keep the lights off for the first 15 min, sitting under the window to peek, so that he doesn’t see her from the street.  ", width*0.15,height*0.45, 450);
      text("Turn the lights on and then check the window to see if he is there, if he is, call the police.", width*0.60,height*0.45, 400);
}
}

function gameOver() {
  if (result == "bad") {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#a3736f');
    image(imageScared,width*0.095,height*0.395,350,550);
    text("While Yalda is shuffling around, resuming the work that she had left for the morning, the man stands behind her with a knife to her throat. The packaging of it lays on the floor. She stands in disbelief, as he whispers in her ear to walk with him to the back of the store. Unfortunately, Yalda is found dead the next morning by the manager, her clothes removed from her body and her neck swollen with bruises.", width *0.19, height*0.18,950);
  } else if (result == "bad2") {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#a3736f');
    image(imageCar,width*0.095,height*0.395,350,550);
    text("As Yalda runs she fails to see that a car is going past the speed limit. She sees the light out the corner of her eye so she tries to speed up. She isn’t able to outrun the car and is hit. The driver does a hit-and-run. Yalda’s body isn’t found until the next morning when a kid is riding his skateboard.", width *0.19, height*0.35,950);
  }else if (result == "bad3") {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#a3736f');
    image(imageDrug,width*0.085,height*0.355,550,750);
    text("As Yalda starts walking she nears closer to her home. She fails to notice that a car has been stalking her the entire time as she was walking. The car slows down and when Yalda doesn’t notice, someone steps out of the car and grabs her from behind. Yalda screams and pleads, clawing at the man. He pulls a napkin from his pocket and sticks it to her face. She bites his fingers and he releases her as he winces in pain. Yalda starts running but starts to feel dizzy and slows down. The car catches up to her. Yalda isn’t found until a year later in a banker’s basement.",width*0.17,height*0.255,1050);
  } else if (result == "bad4") {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#a3736f');
    image(imageMurderer,width*0.095,height*0.395,450,550);
    text("The car speeds up and as Yalda realizes it won’t stop in time, she blinks to get out of the way but reacts too slowly. She ends up getting hit by the car. The man looks at her body disappointedly, then at the driver. They both nod to each other deciding to not call the cops. However, when the driver leaves, the man drags her body down to the bush. Her body is never found.",width*0.21,height*0.185,950);  
  } else if (result == "bad5") {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#a3736f');
    image(imageBush,width*0.095,height*0.395,350,550);
    text("The man grabs her by the neck and slits her throat so she can’t scream. He drags her body to the bushes to finish the job.",width*0.21,height*0.45,950);   
  } else if (result == "bad6") {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#a3736f');
    image(imageHostage,width*0.095,height*0.3,450,550);
    text("She notices that he isn’t so she resumes her night routine. Over the next week, the man stalks her and finds out her routine. Eventually he figures out her apartment number, and one night pushes himself into her home as she opens the door. He proceeds to have his way with her for 2 days, torturing her until her death.",width*0.19,height*0.25,950);  
  } else {
    returnButton.hide();
    button2.hide();
    button3.hide();
    playButton.hide();
    background('#6fa37b');
    image(imageWin,width*0.095,height*0.3,450,550);
    image(imageHandcuff,width*0.65,height*0.3,450,550);
    text("She notices that he stands there looking about. She calls the police in the dark, while watching him walk away. She gives the description of the man to the police and he is found later that week, trying to break into another neighbor’s apartment. Yalda remains safe. Congratulations, she made it!", width*0.2,height*0.3,950);
    button.show();
    }
  text("Click to restart.", width *0.415,height*0.80, 300);
}


function mouseHighlight() {
  noStroke();
  fill(162, 179, 179);
  if (mouseX < width / 2) {
    rect(0, 0, width / 2, height);
  } else if (mouseX >= width / 2) {
    rect(width / 2, 0, width / 2, height);
  }
}
function mousePressed(){
  if (gameStage === "title") {
    if (!song.isPlaying()) {
      song.loop(); 
    }
  }
}
function saveDrawing(){
  saveCanvas("NoPathLeftUnturned.png") 
}