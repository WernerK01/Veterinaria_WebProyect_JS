import { RemoveClient, GetClients } from '../../functions/client/functionsClient.js';
import { LocalStorageAdd } from '../../functions/localStorege.js';
import { MessageError, MessageWarning } from '../../functions/messges.js';
import { Succes, Deny, Valid } from '../../functions/alerts.js';
import { ClearUIClients } from '../../functions/dom/inputs.js';
import { IntValidation } from '../../functions/validations.js';

const btnClientRemove = document.querySelector('#btnClientRemove');

btnClientRemove.addEventListener('click', async () => {
    try {
        const confirm = await Valid('Confirmación', '¿Estás seguro de querer eliminar al cliente?');
        if(!confirm) {
            Deny('Cancelación', 'Se cancelo la operación con éxito.');
            ClearUIClients();
            return;
        }
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        Deny('Error', `Ocurrió un error: ${err.message}`);
    }
    
    ClearUIClients();
});