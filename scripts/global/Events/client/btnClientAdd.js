import { AddClient, GetAllClients } from '../../functions/client/functionsClient.js';
import { LocalStorageAdd } from '../../functions/localStorege.js';
import { MessageWarning } from '../../functions/messges.js';
import { Succes, Deny, Valid } from '../../functions/alerts.js';
import { ClearUpdateButtonClientUI } from '../../functions/dom/buttons.js';
import { IntValidation } from '../../functions/validations.js';
import { CreateClientsCards } from '../../functions/dom/Cards/createClientCard.js';

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
        const confirm = await Valid('Confirmación', `<p class="font-text-1">Por favor, confirma que los datos ingresados estén bien.</p>
            <p><span class="font-bold important">Datos:</span><br>
                    <span class="font-bold">Nombre Completo:</span> ${name} ${lastName}<br>
                    <span class="font-bold">Número de telefono:</span> ${phoneNumer}<br>
                    <span class="font-bold">Correo electrónico:</span> ${mail}
                </p>`);
        if(!confirm) {
            await Deny('Cancelación', '<p class="font-text-1">Se cancelo la operación con éxito.</p>');
            ClearUpdateButtonClientUI();
            return;
        }

        AddClient(name, lastName, phoneNumer, mail);

        const clients = GetAllClients();
        LocalStorageAdd('clients', clients);
        CreateClientsCards(clients);    

        await Succes('Éxito', '<p class="font-text-1">Se agrego al cliente con éxito.</p>');
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnClientAdd-Event-Click': ${err.message}\n${err}`)
        await Deny('Error', `<p class="font-text-1">Ocurrió un error: <span class="font-bold important">${err.message}</span></p>`);
    }

    ClearUpdateButtonClientUI();
    location.reload();
});