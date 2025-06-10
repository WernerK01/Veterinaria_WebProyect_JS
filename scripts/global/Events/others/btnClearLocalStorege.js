import { LocalStorageClear } from '../../functions/localStorege.js';
import { ClearClients } from '../../functions/client/functionsClient.js';
import { Valid, Deny, Succes } from '../../functions/alerts.js';
import { ClearUpdateButtonClientUI } from '../../functions/dom/buttons.js';

const btnGlobalClearClient = document.querySelector('#btnGlobalClearClient');
const btnGlobalClearPet = document.querySelector('#btnGlobalClearPet');

btnGlobalClearClient.addEventListener('click', async () => {
    try {
        const confirm = await Valid('Confirmación', '<p class="font-text-1">¿Estás seguro de querer <span class="font-bold important">eliminar el LocalStorage de los clientes</span>?</p>');
        if(!confirm) {
           await Deny('Cancelación', 'Se cancelo la operación con éxito.');
            ClearUpdateButtonClientUI();
            return;
        }

        let clearedClients = ClearClients();
        LocalStorageClear('clients', clearedClients); 

        await Succes('Éxito', '<p class="font-text-1">Se Limpió el LocalStorage de los clientes.</p>');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnClearLocalStorege-Event-Click': ${err.message}\n${err}`)
        await Deny('Error', `${err.message}`);
    }

    location.reload();
});

btnGlobalClearPet.addEventListener('click', async () => {
    try {
        const confirm = await Valid('Confirmación', '¿Estás seguro de querer <span class="font-bold important">eliminar el LocalStorage de las mascotas</span>?');
        if(!confirm) {
            await Deny('Cancelación', '<p class="font-text-1">Se cancelo la operación con éxito.</p>');
            return;
        }

        LocalStorageClear('pets', []);
        await Succes('Éxito', '<p class="font-text-1">Se Limpió el LocalStorage de las mascotas.</p>');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnClearLocalStorege-Event-Click': ${err.message}\n${err}`);
        await Deny('Error', `${err.message}`);
    }

    location.reload();
});