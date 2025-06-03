import { LocalStorageClear } from '../../functions/localStorege.js';
import { GetClients } from '../../functions/client/client.js';
import { Valid, Deny, Succes } from '../../functions/alerts.js';

const btnGlobalClearClient = document.querySelector('#btnGlobalClearClient');
const btnGlobalClearPet = document.querySelector('#btnGlobalClearPet');

btnGlobalClearClient.addEventListener('click', async () => {
    try {
        const confirm = await Valid('Confirmación', '¿Estás seguro de querer eliminar el LocalStorage de los clientes?');
        if(!confirm) {
            Deny('Cancelación', 'Se cancelo la operación con éxito.');
            return;
        }

        LocalStorageClear('clients', GetClients());
        Succes('Éxito', 'Se Limpió el LocalStorage de los clientes.');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        Deny('Error', `${err.message}`);
    }
});

btnGlobalClearPet.addEventListener('click', async () => {
    try {
        const confirm = await Valid('Confirmación', '¿Estás seguro de querer eliminar el LocalStorage de las mascotas?');
        if(!confirm) {
            Deny('Cancelación', 'Se cancelo la operación con éxito.');
            return;
        }

        LocalStorageClear('pets', []);
        Succes('Éxito', 'Se Limpió el LocalStorage de las mascotas.');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearPet-Event-Click': ${err.message}\n${err}`);
        Deny('Error', `${err.message}`);
    }
});