import { RemoveClient, GetAllClients, GetClient } from '../../functions/client/functionsClient.js';
import { UpdateLocalStorage } from '../../functions/localStorege.js';
import { Succes, Deny, Valid } from '../../functions/alerts.js';
import { ClearUpdateButtonClientUI } from '../../functions/dom/buttons.js';
import { CreateClientsCards } from "../../functions/dom/cards/createClientCard.js";
import { GetAllPets, RemovePetOfClients } from '../../functions/pets/functionsPets.js';

const btnClientRemove = document.querySelectorAll('#btnClientRemove');

btnClientRemove.forEach((button) => {
    button.addEventListener('click', async () => {
        const dataClientID = parseInt(button.getAttribute('data-client-id'));
        const clientFound = GetClient(dataClientID);

        if (clientFound == undefined) { 
            await Deny('Error', 'No se pudo encontrar al usuario.'); 
            return; 
        }

        try {

            const confirm = await Valid('Confirmación', 
                `<p class="font-text-1">Estás seguro de querer eliminar al cliente <span class="font-bold important">${clientFound.name} ${clientFound.lastName}</span>?</p>`);
            if(!confirm) {
                await Deny('Cancelación', '<p class="font-text-1">Se cancelo la operación con éxito.</p>');
                ClearUpdateButtonClientUI();
                return;
            }

            RemovePetOfClients(clientFound);
            RemoveClient(clientFound);

            const clients = GetAllClients();
            const pets = GetAllPets();

            UpdateLocalStorage(clients, pets);
            CreateClientsCards(clients);
            CreatePetsCard(pets);

            await Succes('Éxito', '<p class="font-text-1">El usuario fue eliminado con éxito.</p>');

        } catch(err) {
            console.error(`[ERROR]: Se generó un error en 'btnClientRemove-Event-Click': ${err.message}\n${err}`)
            await Deny('Error', `<p class="font-text-1">Ocurrió un error: <span class="font-bold important">${err.message}</span></p>`);
        }
        
        ClearUpdateButtonClientUI();

        location.reload();
    });
})