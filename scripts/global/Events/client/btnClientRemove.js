import { RemoveClient, GetClients, GetClient } from '../../functions/client/functionsClient.js';
import { LocalStorageAdd } from '../../functions/localStorege.js';
import { Succes, Deny, Valid } from '../../functions/alerts.js';
import { ClearUpdateButtonClientUI } from '../../functions/dom/buttons.js';
import { CreateClientsCards } from "../../functions/dom/Cards/createClientCard.js";

const btnClientRemove = document.querySelectorAll('#btnClientRemove');

btnClientRemove.forEach((button) => {
    button.addEventListener('click', async () => {
        try {
            const confirm = await Valid('Confirmación', '¿Estás seguro de querer eliminar al cliente?');
            if(!confirm) {
                Deny('Cancelación', 'Se cancelo la operación con éxito.');
                ClearUpdateButtonClientUI();
                return;
            }

            const dataClientID = parseInt(button.getAttribute('data-client-id'));
            const clientFound = GetClient(dataClientID);
            
            if (clientFound == undefined) { 
                Deny('Error', 'No se pudo encontrar al usuario.'); 
                return; 
            }

            RemoveClient(clientFound);

            const clients = GetClients();
            LocalStorageAdd('clients', clients);
            CreateClientsCards(clients);

            Succes('Éxito', 'El usuario fue eliminado con éxito.');

        } catch(err) {
            console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
            Deny('Error', `Ocurrió un error: ${err.message}`);
        }
        
        ClearUpdateButtonClientUI();

        setTimeout(() => {
            location.reload();
        }, 2000);
    });
})