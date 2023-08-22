// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// ___________________________________
// 1) DEFINIRE IN HTML UN BOTTONE CON ID
// 2) ALL'EVENTO CLICK ASSOCIAMO UN CODICE CHE GENERA LA GRIGLIA

// GENERARE UNA GRIGLIA
// _________________________________
// 1) DEFINIRE UN CONTENITORE CON DOMENSIONI FISSE
// 2) CONTIAMO DA 1 A 100 E PER OGNI CICLO :
// A) INSERIRE LE CELLE NEL CONTENITORE CON DIMENSIONI FISSE
// I) LA LARGHEZZA DELLA CELLA LE VALUTIAMO CON IL CALC
// II) L'ALTEZZA DELLA CELLA LE VALUTIAMO CON IL ASPET RATIO

// B) ASSOCIAMO L'INDICE ALLA SINGOLA CELLA

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// MI AGGANCIO GLI ELEMENTI DALL'HTML
const button = document.getElementById("pulsante");
const grid = document.getElementById("griglia");

// GENERO LA GRIGLIA CON IL CLICK DEL BOTTONE

button.addEventListener("click", function () {
  generaGriglia();
});

let cellTotal = 10 * 10;

// FUNZIONE EPR GENERARE LA GRIGLIA

function generaGriglia(index) {
  for (let index = 1; index <= cellTotal; index++) {
    // const cell = document.createElement("div");
    // cell.classList.add("cell");
    // cell.innerText = index;

    // cell.addEventListener("click", function () {
    //   cell.classList.add("aqua");

    //   console.log(index);
    // });
    const cell = generaCella(index);
    grid.append(cell);
  }
}
// FUNZIONE PER GENERALE LA CELLA

function generaCella(indice) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = indice;

  cell.addEventListener("click", function () {
    if (listabombe.includes(indice)) {
      cell.classList.add("bomb");
      console.log("bomba");
    } else {
      cell.classList.add("aqua");
      console.log("ciao");
    }
    // console.log(indice);
  });
  return cell;
}

const bombe = 16;
const min = 1;
const max = 100;

function generaBombe(bombe, min, max) {
  const numeriCasuali = [];
  while (numeriCasuali.length < bombe) {
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numeriCasuali.includes(numeroCasuale)) {
      numeriCasuali.push(numeroCasuale);
    }
  }
  return numeriCasuali;
}

const listabombe = generaBombe(bombe, min, max);

console.log(listabombe);

// Consegna:

// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

// __________________________________________________________________________________________________________________

// 1 - Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
