import { Valid, Succes, Deny } from "../../functions/alerts.js";
import { MessageWarning } from "../../functions/messges.js";
import { AddPet, GetAllPets } from "../../functions/pets/functionsPets.js";
import { GetSetSelectedClient } from "../../functions/client/functionsClient.js";
import { LocalStorageAdd } from "../../functions/localStorege.js";
import { IntValidation } from "../../functions/validations.js";
import { ClearUpdateButtonsPetsUI } from "../../functions/dom/buttons.js";
import { CreatePetsCard } from "../../functions/dom/cards/createPetsCard.js";

const btnPetAdd = document.querySelector('#btnPetAdd');

btnPetAdd.addEventListener('click', async () => {
    let name = document.querySelector('#inputPetName').value;
    let age = document.querySelector('#inputPetAge').value;
    let race = document.querySelector('#inputPetRace').value;
    let description = document.querySelector('#textAreaPetDetails').value === '' ? 'Nada especificado.' : document.querySelector('#textAreaPetDetails').value;
    let selectedClient = GetSetSelectedClient();

    if(selectedClient === undefined) {
        MessageWarning('Debes seleccionar a un cliente primero.');
        return;
    }

    if(name === "" || age === "" || race === "") {
        MessageWarning('Debes rellenar los campos primero.');
        return;
    }

    if(IntValidation(age)) {
        MessageWarning('La edad de la mascota debe ser un número entero.');
        return;
    }

    try {
        let confim = await Valid('Confirmación', `<p class="font-text-1">Por favor, confirma que los datos ingresados estén bien.</p>
            <p><span class="font-bold important">Datos:</span><br>
                    <span class="font-bold">Cliente:</span> ${selectedClient.name} ${selectedClient.lastName}<br>
                    <span class="font-bold">Nombre:</span> ${name}<br>
                    <span class="font-bold">Edad:</span> ${age}<br>
                    <span class="font-bold">Raza:</span> ${race}<br>
                    <span class="font-bold">Descripción:</span> ${description}
        </p>`);

        if(!confim) {
            await Deny('Cancelación', '<p class="font-text-1">Se ha cancelado la operación con éxito.</p>');
            ClearUpdateButtonsPetsUI();
            return;
        }

        AddPet(name, age, race, description, selectedClient.id);
        let pets = GetAllPets();
        LocalStorageAdd('pets', pets);
        CreatePetsCard(pets);

        await Succes('Éxito', '<p class="font-text-1">Se añadió la mascota nueva con éxito.</p>')

    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnPetAdd-Event-Click': ${err.message}\n${err}`)
        await Deny('Error', `Ocurrió un error: ${err.message}`);
    }
    
    ClearUpdateButtonsPetsUI();
    location.reload();
});