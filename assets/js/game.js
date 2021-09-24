// get player name
var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
      }
  
    console.log("Your robot's name is " + name);
    return name;
  };

//random math function
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

//could also be written "function fight() {  }"
var fight = function(enemy) {

    while(enemy.health > 0 && playerInfo.health > 0) {
        var promptFight = window.prompt("Would you like to fight or skip this battle? Enter FIGHT or SKIP.");
        promptFight = promptFight.toLowerCase();
        console.log(promptFight);

        if (promptFight == "skip"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from player money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("Player Money", playerInfo.money);
                break;
            }
           
        } 
    
        if (promptFight == "fight") {
            
                // generate random damage value based on player's attack power
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            
                enemy.health = Math.max(0, enemy.health - damage);

            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            } 
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");  
            };
            
                var damage = randomNumber(enemy.attack - 3, enemy.attack);
            
                playerInfo.health = Math.max(0, playerInfo.health - damage);
            
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } 
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            };
        } else {
            window.alert("You need to choose a valid option. Try again!");
        };
    };
};

//start game function
var startGame = function(){
    // resetting player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health >= 0) {
            window.alert("Welcome to Robot Gladiators! Round" + (i +1));
            debugger;

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            //shopping
            if (playerInfo.health >= 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm){
                    shop();
                };
            };   
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        };   
    };
    //play again
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm){
        //startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
};

//shop
var shop = function() {
    var shopOptionPrompt = parseInt(window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: '1 to refill', '2 to upgrade', or '3 to leave'."
    ));
    //using a switch instead of if/else if to go down a user path
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
          window.alert("Leaving the store.");
      
          // do nothing, so function will end
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
      
          // call shop() again to force player to pick a valid option
          shop();
          break;
      }
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } 
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } 
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14),
      health: randomNumber(40, 60)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14),
      health: randomNumber(40, 60)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14),
      health: randomNumber(40, 60)
    }
];

// calling the game when the page loads
startGame();