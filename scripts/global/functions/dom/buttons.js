import { ClearUIClients, UpdateClientInputs, UpdatePetInputs, ClearUIPets } from "./inputs.js";

const btnClientAddCol = document.querySelector('#btnClientAddCol');
const btnClientUpdateCol = document.querySelector('#btnClientUpdateCol');

const btnAddPetsCol = document.querySelector('#btnAddPetsCol');
const btnUpdatePetsCol = document.querySelector('#btnUpdatePetsCol');

export function UpdateButtonClientUI(selection) {
    btnClientUpdateCol.className = "col-lg-12 col-sm-12 mb-2";
    btnClientAddCol.className = "col-lg-6 col-sm-12 mb-2 visually-hidden";

    UpdateClientInputs(selection);
}

export function ClearUpdateButtonClientUI() {    
    btnClientUpdateCol.className = "col-lg-6 col-sm-12 mb-2 visually-hidden";
    btnClientAddCol.className = "col-lg-12 col-sm-12 mb-2";

    ClearUIClients();
}

export function UpdateButtonPetUI(selectedPet) {
    btnAddPetsCol.className = 'col-lg-6 col-sm-12 mb-2 visually-hidden';
    btnUpdatePetsCol.className = 'col-lg-12 col-sm-12 mb-2';

    UpdatePetInputs(selectedPet);
}

export function ClearUpdateButtonsPetsUI() {
    btnAddPetsCol.className = 'col-lg-12 col-sm-12 mb-2';
    btnUpdatePetsCol.className = 'col-lg-6 col-sm-12 mb-2 visually-hidden';

    ClearUIPets();
}