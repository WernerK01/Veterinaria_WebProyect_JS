import { UpdateClient, GetClients } from "../../functions/client/functionsClient.js";
import { LocalStorageAdd } from "../../functions/localStorege.js";
import { CreateClientsCards } from "../../functions/dom/Cards/createClientCard.js";
import { ClearUpdateButtonClientUI } from "../../functions/dom/buttons.js";
import { Valid, Deny, Succes } from "../../functions/alerts.js";
import { IntValidation } from "../../functions/validations.js";

btnClientUpdate.addEventListener('click', async () => {
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
        const confirm = await Valid('<h2 class="font-bold">Confirmación</h2>', `<p class="font-text-1">¿Estás seguro de querer modificar al cliente?</p>
            <p>Datos Nuevos:<br>
                    <span class="font-bold">Nombre Completo:</span> ${name} ${lastName}<br>
                    <span class="font-bold">Número de telefono:</span> ${phoneNumer}<br>
                    <span class="font-bold">Correo electrónico:</span> ${mail}
                </p>`);
        if(!confirm) {
            await Deny('Cancelación', 'Se cancelo la operación con éxito.');
            ClearUpdateButtonClientUI();
            return;
        }
                
        UpdateClient(name, lastName, phoneNumer, mail);

        const clients = GetClients();
        LocalStorageAdd('clients', clients);
        CreateClientsCards(clients);

        await Succes('Éxito', 'Se modifico al usuario correctamente.');

    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        await Deny('Error', `Ocurrió un error: ${err.message}`);
    }

    ClearUpdateButtonClientUI();

    location.reload();
});