import { GetClient, GetSetSelectedClient } from "../../functions/client/functionsClient.js";
import { UpdateButtonClientUI } from "../../functions/dom/buttons.js";

const AllBtnClientSelect =  document.querySelectorAll('#btnClientSelect');

AllBtnClientSelect.forEach((button) => {
    button.addEventListener('click', () => {
        const dataClientID = parseInt(button.getAttribute('data-client-id'));
        const clientFound = GetClient(dataClientID);

        if (clientFound == undefined) throw new Error('El cliente no se pudo encontrar.');

        GetSetSelectedClient(clientFound);
        UpdateButtonClientUI(clientFound);
    });
});