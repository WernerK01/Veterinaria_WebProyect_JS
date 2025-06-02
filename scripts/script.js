import './global/btnClearLocalStorege.js';
import './global/btnSearch.js';

import { AddClient, GetClients } from './global/client/client.js';

import { LocalStorageAdd } from './global/functions/localStorege.js';
import { MessageSucces, MessageError, MessageWarning } from './global/functions/messges.js';
import { ClearUIClients, ClearUIPets } from './global/functions/clearUI.js';
import { IntValidation } from './global/functions/validations.js';

const btnClientAdd = document.querySelector('#btnClientAdd');
const btnClientRemove = document.querySelector('#btnClientRemove');


btnClientAdd.addEventListener('click', () => {
    let name = document.querySelector('#inputClientName').value;
    let lastName = document.querySelector('#inputClientLastName').value;
    let phoneNumer = document.querySelector('#inputClientPhoneNumer').value;
    let mail = document.querySelector('#inputClientMail').value;

    if(name === '' || lastName === '' || phoneNumer === '' || mail === '') {
        MessageWarning('Debes rellenar los campos primero.')
        return;
    }

    if(IntValidation(phoneNumer)) {
        MessageWarning('El número de telefono debe ser un número del 0-8.\nPor ejemplo: 12345678');
        return;
    }

    try {
        AddClient(name, lastName, phoneNumer, mail);
        LocalStorageAdd('clients', GetClients());
        MessageSucces('Se agrego al cliente nuevo.');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        MessageError(`Ocurrió un error: ${err.message}`);
    }

    ClearUIClients();
});