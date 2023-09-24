"use strict";

/*
une musique se change par feu rouge, 30 feux rouges en tout (donc 30 chansons)
affichage de la musique jouée + nb de feux rouges restants
2 fins possibles: (if.. else)
    -john a passé les feux rouges en entendant Wejdene moins de 10 fois, il rentre chez lui
    -john a entendu Wejdene 10 fois, il explose
*/

let santeMentaleJohn = 10;
let music = "Anissa - Wejdene";
let feuxRouge = 30;
let nbChgmt = 0;

function musicChange(){//cette fonction permettra un changement de musique, ici on aura besoin d'un changement aléatoire
    feuxRouge--;//la fonction fera changer la musique et donc réduire de 1 le nombre de feux restants

    const choixMusic = Math.floor(Math.random() * 5) + 1;//la constante permet le changement aléatoire de la musique entre 5 titres

    if (choixMusic === 1){//si le chiffre 1 sort de manière aléatoire, le titre Anissa de Wejdene jouera
        music = "Anissa - Wejdene";//si la musique de wejdene passe, la santée mentale de John baissera, et donc le nb de changement de taxi augmentera
        santeMentaleJohn--;
        nbChgmt++;
    } else if (choixMusic === 2){//si le chiffre 2 sort de manière aléatoire, Deep in the Willow jouera. Pareil pour 3, 4 et 5.
        music = "Deep in the Willow - Knocked Loose";
    } else if (choixMusic === 3){
        music = "Halls of Illusion - Insane Clown Posse";
     } else if (choixMusic === 4){
        music ="Land of the Sun - Kim Dracula";
     } else if (choixMusic === 5){
        music = "Dear Diary, - Bring Me The Horizon";
     }//lorsque ces titres passent (2,3,4,5) John reste tranquillement dans le taxi et ne perd pas en santé mentale
}


while(santeMentaleJohn > 0 && feuxRouge > 0){
    //tant que la santé mentale de John est supérieure à 0 et qu'il reste des feux rouges, la musique continuera à changer
    musicChange();
    console.log("Vous écoutez: " + music + ". Il reste " + feuxRouge + " feux rouges.");
}

if(santeMentaleJohn <= 0){
    console.log("Wejdene a saturé la radio du taxi, celui-ci a explosé.");
} else {
    console.log("John a pu rentré tranquillement chez lui. Il a cependant changé " + nbChgmt + " fois de taxi.");
}
//si la santé mentale de John atteint 0, il explose. Sinon il a pu rentrer chez lui en changeant un certain nb de fois de taxis.