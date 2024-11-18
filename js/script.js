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
    optionsBtn.addEventListener("click", cbOptions);
    newBtn.addEventListener("click", cbNewGame);

    // Initial settings
    document.getElementById("rollCounter").textContent = maxNrOfRolls;
	
} // End init
window.addEventListener("load", init);
// --------------------------------------------------

function cbOptions() {
    console.log("cbOptions() called");
    optionsDialog = document.getElementById("options");
    
    optionsDialog.showModal();
    document.getElementById("optionsOkBtn").addEventListener("click", cbOptionsOk);
}

function cbNewGame() {
    console.log("cbNewGame() called");
}

function cbOptionsOk() {
    maxNrOfRolls = document.getElementById("nrOfReroll").value;
    document.getElementById("rollCounter").textContent = maxNrOfRolls;
    optionsDialog.close();
}
