// Tournez manege
const nbTours = 10;

console.log("Le manège démarre");

// Solution avec for
for (let tour = 1; tour <= nbTours; tour++) {
	console.log(`C'est le tour numéro ${tour}`);
}

// Solution alternative avec un while
let tour = 1;
while (tour <= nbTours) {
  console.log(`C'est le tour numéro ${tour}`);
  tour++;
}

console.log("Le manège s'arrête");





// Table de multiplication
const nombre = 7; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

// Solution avec un for
for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// Solution avec un while
let i = 1;
while (i <= 10) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
  i++;
}




// FizzBuzz

//  Solution avec for
for (let nombre =1; nombre <= 100; nombre ++){
	if (nombre % 3 === 0 && nombre % 5 === 0)
	console.log("FizzBuzz");
	else if (nombre % 3 === 0)
	console.log("Fizz");
	else
	console.log(nommbre);
}


// function direBonjour() {
//   console.log("Bonjour !");
// }

// console.log("Début du programme");
// direBonjour();
// console.log("Fin du programme");

// function direBonjour() {
//   return "Bonjour !";
// }

// console.log(direBonjour()); // "Bonjour !"