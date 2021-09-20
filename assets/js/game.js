
var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;9
var enemyAttack = 12;


//could also be written "function fight() {  }"
var fight = function() {
    window.alert("Welcome To Robot Gladiators!")

    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter FIGHT or SKIP.");
    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT") {
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        playerAttacks();
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        };
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        } 
    } else {
        window.alert("You need to choose a valid option. Try again!");
    };
}

//helper function for when the player attacks Robot
var playerAttacks = function() {
    enemyHealth = enemyHealth - playerAttack;
}
//helper function for when th enemy robot attacks player
var enemyAttacks = function() {
    playerHealth = playerHealth - enemyAttack;
}
fight();