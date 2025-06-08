import { LocalStorageClear } from '../../functions/localStorege.js';
import { ClearClients } from '../../functions/client/functionsClient.js';
import { Valid, Deny, Succes } from '../../functions/alerts.js';
import { ClearUpdateButtonClientUI } from '../../functions/dom/buttons.js';

const btnGlobalClearClient = document.querySelector('#btnGlobalClearClient');
const btnGlobalClearPet = document.querySelector('#btnGlobalClearPet');

btnGlobalClearClient.addEventListener('click', async () => {
    try {
        const confirm = await Valid('Confirmación', '¿Estás seguro de querer eliminar el LocalStorage de los clientes?');
        if(!confirm) {
           await Deny('Cancelación', 'Se cancelo la operación con éxito.');
            ClearUpdateButtonClientUI();
            return;
        }

        let clearedClients = ClearClients();
        LocalStorageClear('clients', clearedClients); 

        await Succes('Éxito', 'Se Limpió el LocalStorage de los clientes.');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        await Deny('Error', `${err.message}`);
    }

    location.reload();
});

btnGlobalClearPet.addEventListener('click', async () => {
    try {
        const confirm = await Valid('Confirmación', '¿Estás seguro de querer eliminar el LocalStorage de las mascotas?');
        if(!confirm) {
            await Deny('Cancelación', 'Se cancelo la operación con éxito.');
            return;
        }

        LocalStorageClear('pets', []);
        await Succes('Éxito', 'Se Limpió el LocalStorage de las mascotas.');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearPet-Event-Click': ${err.message}\n${err}`);
        await Deny('Error', `${err.message}`);
    }

    location.reload();
});