import { GetClient, GetSetSelectedClient } from "../../functions/client/functionsClient.js";
import { UpdateButtonClientUI } from "../../functions/dom/buttons.js";
import { MessageError } from "../../functions/messges.js";

const AllBtnClientSelect =  document.querySelectorAll('#btnClientSelect');

AllBtnClientSelect.forEach((button) => {
    button.addEventListener('click', () => {
        const dataClientID = parseInt(button.getAttribute('data-client-id'));
        const clientFound = GetClient(dataClientID);

        if (clientFound == undefined) throw new Error('El cliente no se pudo encontrar.');

        try {
            GetSetSelectedClient(clientFound);
            UpdateButtonClientUI(clientFound);
        } catch(err) {
            console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
            MessageError(`Ocurrió un error: ${err.message}`);
        }
    });
});