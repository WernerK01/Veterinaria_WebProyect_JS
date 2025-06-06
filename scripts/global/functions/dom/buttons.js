import { ClearUIClients, UpdateClientInputs } from "./inputs.js";

const btnClientAddCol = document.querySelector('#btnClientAddCol');
const btnClientUpdateCol = document.querySelector('#btnClientUpdateCol');

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