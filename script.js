//1fc721ad-30e0-4313-88eb-69a42534331c 
import { getData } from './GetPantry.js';

let Pantry; // Globale Variable zur Speicherung der Daten



function info() {
  console-log("info");
}
//############################################################################################
//############################################################################################
//############################################################################################

let n_verzögerung = 1000


function Knopf_ja(Key) {
info();
  console.log("ja gedrückt - Start", new Date());
  getData();
  setTimeout(function() {PutData(Key);}, n_verzögerung);

  console.log("ja gedrückt - Ende", new Date());
}


function Knopf_nein(Key) {
  setTimeout(function() {PutData(Key);}, n_verzögerung);
}



function Knopf_löschen() {
  setTimeout(function() {DeletePantry();}, n_verzögerung);
}



