
var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;9
var enemyAttack = 12;

//could also be written "function fight() {  }"
var fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth) {
        var promptFight = window.prompt("Would you like to fight or skip this battle? Enter FIGHT or SKIP.");
        console.log(promptFight);

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        } 
    
        if (promptFight === "fight" || promptFight === "FIGHT") {
            playerAttacks();
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");  
            };
            enemyAttacks();
            
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            };
        } else {
            window.alert("You need to choose a valid option. Try again!");
        };
    };
};

//helper function for when the player attacks Robot
var playerAttacks = function() {
    enemyHealth = enemyHealth - playerAttack;
}
//helper function for when th enemy robot attacks player
var enemyAttacks = function() {
    playerHealth = playerHealth - enemyAttack;
}

//start game function
var startGame = function(){
    // reseting player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth >= 0) {
            window.alert("Welcome to Robot Gladiators! Round" + (i +1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);

            //shopping
            if (playerHealth >= 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm){
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
};

//shop
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //using a switch instead of if/else if to go down a user path
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
              }
              else {
                window.alert("You don't have enough money!");
              }
            
              break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
               // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
              }
              else {
                window.alert("You don't have enough money!");
              }
            
              break;
        case "leave":
        case "LEAVE":
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

// calling the game when the page loads
startGame();