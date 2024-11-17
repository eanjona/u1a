/* Uppgift U1a */

// Globala variabler
let optionsDialog;	    // Element för inställningsdialog
let die1Elem, die2Elem,
    die3Elem;           // Element för tärningarna
let rollElem;           // Element för utskrift av antal omkast som återstår
let resElem;	        // Element för resultat
let stopBtn;            // Knapp för att stanna
let maxNrOfRolls = 3;   // Valt max antal omkast av tärningar
let nrOfRolls = 0;      // Antal omkast som återstår
// --------------------------------------------------
// Ta fram referenser till element i gränssnittet och lägg till händelselyssnare.
function init() {
    optionsBtn.addEventListener("click", cbOptionsOnClick);
    newBtn.addEventListener("click", cbNewOnClick);
	
} // Slut init
window.addEventListener("load", init);
// --------------------------------------------------

function cbOptionsOnClick() {
    console.log("cbOptionsOnClick() called");
    optionsDialog = document.getElementById("options");
    optionsDialog.showModal().addEventListener("click", cbOptionsOkBtn);
}

function cbNewOnClick() {
    console.log("cbNewOnClick() called");
}

function cbOptionsOkBtn() {
    console.log("cbOptionsOkBtn() called was:" + maxNrOfRolls);
    maxNrOfRolls = document.getElementById("nrOfReroll").value;
    console.log("cbOptionsOkBtn() called now:" + maxNrOfRolls);

}
