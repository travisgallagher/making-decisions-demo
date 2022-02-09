/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let eowynAttack = 50; 
let witchKingAttack = 45; // if we put "forty-five" we will get they are the same strength

if(eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger.");
} else if(eowynAttack < witchKingAttack){
    console.log("Witch King is stronger.")
} else if (eowynAttack === witchKingAttack){
    console.log("They are the same strength."); 
}; 


let eowynHealth = 100; 
let eowynDefense = 0; 

if(eowynHealth + eowynDefense <= witchKingAttack) {
    console.log("Eowyn is dead.");
} else {
   // eowynHealth = eowynHealth - witchKingAttack; 
    // console.log("Eowyn is alive! " + "Her health is now " + eowynHealth);
    console.log(`Eowyn's alive and her health is down to ${eowynHealth}. `);
};

let coinLandsHeads = false; // coin is tails. 

if(coinLandsHeads !== true) {
    console.log("Witch king gets to run away.")
} else {
    console.log("Witch king got stabbed in the face.")
};


// for (let i = 0; i < 5; i++) {
//     if(eowynHealth > 0) {
//         eowynHealth = eowynHealth - witchKingAttack; 
//         console.log(`Eowyn has ${eowynHealth} left.`);
//     } else {
//         console.log(`Eowyn dead.`); 
//     };
// };


while(eowynHealth > 0) {
    eowynHealth -= witchKingAttack; 
    console.log(`Eowyn has ${eowynHealth} health left.`)
    if(eowynHealth <= 0) {
        console.log("Eowyn has been killed.")
    };

}; 