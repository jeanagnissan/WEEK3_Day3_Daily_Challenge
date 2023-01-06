
/**
 * Exercice Daily chalenge
 */
console.log("----------------Exercice Daily chalenge------------")

// 1- sans les boucles imbriqué
console.log("----------------sans les boucles imbriqué------------")

const nbrLoop = 6;
let etoile = "";

for (let index = 0; index < nbrLoop; index++) {
    etoile = etoile + " * ";
    console.log(etoile);
}


// 2- avec les boucles imbriqué
console.log("----------------avec les boucles imbriqué------------")

const nbrMax = 6;

for (let i = 0; i < nbrMax; i++) {
    const loopOne = i + 1;
    let loopTwoo = "";
    for (let j = 0; j < loopOne ; j++) {
        loopTwoo = loopTwoo + " * ";  
    }   
    console.log(loopTwoo);
}

