// Tableau pour stocker les noms des élèves
let eleves = [];

function ajouterEleve() {
  // Récupérer le nom saisi par l'utilisateur
  let nom = document.getElementById("nomEleve").value;
  if (nom.trim() !== "") {
    // Ajouter le nom à la liste des élèves
    eleves.push(nom);
    // Effacer le champ de saisie
    document.getElementById("nomEleve").value = "";
  }
}

function afficherListe() {
  // Récupérer l'élément <ul> qui contiendra la liste des élèves
  let listeEleves = document.getElementById("listeEleves");
  // Effacer le contenu actuel de la liste
  listeEleves.innerHTML = "";

  // Parcourir le tableau des élèves et ajouter chaque nom à la liste <ul>
  for (let i = 0; i < eleves.length; i++) {
    let eleve = document.createElement("li");
    eleve.textContent = eleves[i];
    listeEleves.appendChild(eleve);
  }
}