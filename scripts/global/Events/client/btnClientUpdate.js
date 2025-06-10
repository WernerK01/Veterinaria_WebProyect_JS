import { UpdateClient, GetAllClients, GetSetSelectedClient, ClearSelection } from "../../functions/client/functionsClient.js";
import { LocalStorageAdd } from "../../functions/localStorege.js";
import { CreateClientsCards } from "../../functions/dom/cards/createClientCard.js";
import { ClearUpdateButtonClientUI } from "../../functions/dom/buttons.js";
import { Valid, Deny, Succes } from "../../functions/alerts.js";
import { IntValidation } from "../../functions/validations.js";

btnClientUpdate.addEventListener('click', async () => {
    let name = document.querySelector('#inputClientName').value;
    let lastName = document.querySelector('#inputClientLastName').value;
    let phoneNumer = document.querySelector('#inputClientPhoneNumer').value;
    let mail = document.querySelector('#inputClientMail').value;

    const oldClient = GetSetSelectedClient();

    if(name === '' || lastName === '' || phoneNumer === '' || mail === '') {
        MessageWarning('Debes rellenar los campos primero.');
        return;
    }
    
    if(IntValidation(phoneNumer)) {
        MessageWarning('El número de telefono debe ser un número del 0-8.\nPor ejemplo: 12345678');
        return;
    }

    try {
        const confirm = await Valid('Confirmación', `<p class="font-text-1">¿Estás seguro de querer modificar al cliente?</p>
            <p><span class="font-bold important">Datos Antiguos:</span><br>
                <span class="font-bold">Nombre Completo:</span> ${oldClient.name} ${oldClient.lastName}<br>
                <span class="font-bold">Número de telefono:</span> ${oldClient.phoneNumer}<br>
                <span class="font-bold">Correo electrónico:</span> ${oldClient.mail}</p>

            <p><span class="font-bold important">Datos Nuevos:</span><br>
                <span class="font-bold">Nombre Completo:</span> ${name} ${lastName}<br>
                <span class="font-bold">Número de telefono:</span> ${phoneNumer}<br>
                <span class="font-bold">Correo electrónico:</span> ${mail}</p>`);
        if(!confirm) {
            await Deny('Cancelación', '<p class="font-text-1">Se cancelo la operación con éxito.</p>');
            ClearUpdateButtonClientUI();
            return;
        }
                
        UpdateClient(name, lastName, phoneNumer, mail);

        const clients = GetAllClients();
        LocalStorageAdd('clients', clients);
        CreateClientsCards(clients);
        ClearSelection();

        await Succes('Éxito', 'Se modifico al usuario correctamente.');

    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnClientUpdate-Event-Click': ${err.message}\n${err}`)
        await Deny('Error', `<p class="font-text-1">Ocurrió un error: <span class="font-bold important">${err.message}</span></p>`);
    }

    ClearUpdateButtonClientUI();
    location.reload();
});