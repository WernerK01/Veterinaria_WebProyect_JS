import { LocalStorageClear } from '../functions/localStorege.js';
import { MessageSucces, MessageError } from '../functions/messges.js';

const btnGlobalClearClient = document.querySelector('#btnGlobalClearClient');
const btnGlobalClearPet = document.querySelector('#btnGlobalClearPet');

btnGlobalClearClient.addEventListener('click', () => {
    try {
        LocalStorageClear('Clients', []);
        MessageSucces(`Se Limpió el LocalStorege de los clientes.`)
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        MessageError(`${err.message}`);
    }
});

btnGlobalClearPet.addEventListener('click', () => {
    try {
        LocalStorageClear('Pets', []);
        MessageSucces(`Se Limpió el LocalStorege de las mascotas.`)
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearPet-Event-Click': ${err.message}\n${err}`);
        MessageError(`${err.message}`);
    }
});