import { RemoveClient, GetClients, GetClient } from '../../functions/client/functionsClient.js';
import { LocalStorageAdd } from '../../functions/localStorege.js';
import { Succes, Deny, Valid } from '../../functions/alerts.js';
import { ClearUpdateButtonClientUI } from '../../functions/dom/buttons.js';
import { CreateClientsCards } from "../../functions/dom/Cards/createClientCard.js";

const btnClientRemove = document.querySelectorAll('#btnClientRemove');

btnClientRemove.forEach((button) => {
    button.addEventListener('click', async () => {
        try {
            const dataClientID = parseInt(button.getAttribute('data-client-id'));
            const clientFound = GetClient(dataClientID);

            const confirm = await Valid('<h2 class="font-bold">Confirmación</h2>', 
                `<p class="font-text-1">Estás seguro de querer eliminar al cliente <span class="font-bold">${clientFound.name} ${clientFound.lastName}</span>?</p>`);
            if(!confirm) {
                await Deny('Cancelación', 'Se cancelo la operación con éxito.');
                ClearUpdateButtonClientUI();
                return;
            }
            
            if (clientFound == undefined) { 
                await Deny('Error', 'No se pudo encontrar al usuario.'); 
                return; 
            }

            RemoveClient(clientFound);

            const clients = GetClients();
            LocalStorageAdd('clients', clients);
            CreateClientsCards(clients);

            await Succes('Éxito', 'El usuario fue eliminado con éxito.');

        } catch(err) {
            console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
            await Deny('Error', `Ocurrió un error: ${err.message}`);
        }
        
        ClearUpdateButtonClientUI();

        location.reload();
    });
})