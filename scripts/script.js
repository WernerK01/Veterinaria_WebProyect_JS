import './global/UI/btnClearLocalStorege.js';
import './global/UI/btnSearch.js';

import { AddClient, GetClients } from './global/client/client.js';

import { LocalStorageAdd } from './global/functions/localStorege.js';
import { MessageSucces, MessageError, MessageWarning } from './global/functions/messges.js';
import { Succes, Deny, Valid } from './global/functions/alerts.js';
import { ClearUIClients, ClearUIPets } from './global/dom/clearUI.js';
import { IntValidation } from './global/functions/validations.js';

const btnClientAdd = document.querySelector('#btnClientAdd');
const btnClientRemove = document.querySelector('#btnClientRemove');


btnClientAdd.addEventListener('click', async () => {
    let name = document.querySelector('#inputClientName').value;
    let lastName = document.querySelector('#inputClientLastName').value;
    let phoneNumer = document.querySelector('#inputClientPhoneNumer').value;
    let mail = document.querySelector('#inputClientMail').value;

    if(name === '' || lastName === '' || phoneNumer === '' || mail === '') {
        MessageWarning('Debes rellenar los campos primero.');
        return;
    }

    if(IntValidation(phoneNumer)) {
        MessageWarning('El número de telefono debe ser un número del 0-8.\nPor ejemplo: 12345678');
        return;
    }

    try {
        const confirm = await Valid('Confirmación', '¿Estás seguro de querer agregar al cliente?');
        if(!confirm) {
            Deny('Cancelación', 'Se cancelo la operación con éxito.');
            ClearUIClients();
            return;
        }

        AddClient(name, lastName, phoneNumer, mail);
        LocalStorageAdd('clients', GetClients());
        Succes('Éxito', 'Se agrego al cliente nuevo.');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        MessageError(`Ocurrió un error: ${err.message}`);
    }

    ClearUIClients();
});