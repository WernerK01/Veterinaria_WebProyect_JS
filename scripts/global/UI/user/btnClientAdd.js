import { AddClient, GetClients } from '../../functions/client/client.js';
import { LocalStorageAdd } from '../../functions/localStorege.js';
import { MessageError, MessageWarning } from '../../functions/messges.js';
import { Succes, Deny, Valid } from '../../functions/alerts.js';
import { ClearUIClients } from '../../dom/clearUI.js';
import { IntValidation } from '../../functions/validations.js';

const btnClientAdd = document.querySelector('#btnClientAdd');

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