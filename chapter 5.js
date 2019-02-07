// Chapitre 5 ajouter des conditions


// exercice 1 changez les valeurs des variables temperature et formule
const temperature = 0;
if (temperature <= 0) {
	console.log("Il gèle");
} else {
	console.log("Il fait pas si froid");
}


const formule = "abracadabra";
if (formule === "abracadabra") {
	console.log("C'est la formule magique !");
} else {
	console.log("Ce n'est pas la bonne formule");
}



// exercice 2 compléter ce programme pour qu'il affiche le jour suivant le jour actuel
const jourActuel = "lundi";
let jourSuivant = "";

// Solution en utilisant switch
switch (jourActuel) {
	case "lundi":
		jourSuivant = "mardi";
		break;
	case "mardi":
		jourSuivant = "mercredi";
		break;
	case "mercredi":
		jourSuivant = "jeudi";
		break;
	case "jeudi":
		jourSuivant = "vendredi";
		break;
	case "vendredi":
		jourSuivant = "samedi";
		break;
	case "dimanche":
		jourSuivant = "lundi";
		break;
	default:
		console.log("jour non reconnu");
}
// Solution en utilisant if
if (jourActuel === "lundi") {
	jourSuivant = "mardi";
} else if (jourActuel === "mardi") {
	jourSuivant = "mercredi";
} else if (jourActuel === "mercredi") {
	jourSuivant = "jeudi";
} else if (jourActuel === "jeudi") {
	jourSuivant = "vendredi";
} else if (jourActuel === "samedi") {
	jourSuivant = "dimanche";
} else if (jourActuel === "dimanche") {
	jourSuivant = "lundi";
} else {
	console.log("jour non reconnu");
}



// exercice 3 Baccalauréat
const moyenne = 11;
if (moyenne < 10) {
	console.log("Le candidat est recalé");
} else if (moyenne < 12) {
	console.log("Le candidat est reçu");
} else if (moyenne >= 12) {
	console.log("Le candidat est reçu avec mention");
}


// exercice 4 Seconde Suivante
let heures = 14; // Faire varier cette variable entre 0 et 23
let minutes = 17; // Faire varier cette variable entre 0 et 59
let secondes = 59; // Faire varier cette variable entre 0 et 59
// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
	(secondes >= 0) && (secondes <= 59)) {
	secondes++; // On incrémente les secondes
	if (secondes === 60) {
		// Il faut mettre les secondes à 0 et passer à la minute suivante
		secondes = 0;
		minutes++;
		if (minutes === 60) {
			// Il faut mettre les minutes à 0 et passer à l'heure suivante
			minutes = 0;
			heures++;
			if (heures === 24) { // L'heure suivante est minuit
				heures = 0;
			}
		}
	}
	console.log(`Dans une seconde, il sera ${heures} heures, ${minutes} minutes et ${secondes} secondes`);
} else {
	console.log("Erreur : heure incorrecte !");
}