import { Valid, Succes, Deny } from "../../functions/alerts.js";
import { GetSetSelectedPet, GetAllPets, UpdatePet } from "../../functions/pets/functionsPets.js";
import { ClearUpdateButtonsPetsUI } from "../../functions/dom/buttons.js";
import { LocalStorageAdd } from "../../functions/localStorege.js";
import { MessageError } from "../../functions/messges.js";
import { IntValidation } from "../../functions/validations.js";
import { CreatePetsCard } from "../../functions/dom/cards/createPetsCard.js";

const btnPetUpdate = document.querySelector('#btnPetUpdate');

btnPetUpdate.addEventListener('click', async () => {
    const petSelected = GetSetSelectedPet();
    if(petSelected === undefined) { 
        MessageError('No se selecciono ninguna mascona.');
        return;
    }

    let name = document.querySelector('#inputPetName').value;
    let age = document.querySelector('#inputPetAge').value;
    let race = document.querySelector('#inputPetRace').value;
    let description = document.querySelector('#textAreaPetDetails').value === '' ? 'Nada especificado.' : document.querySelector('#textAreaPetDetails').value;

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
            <p><span class="font-bold important">Datos Antiguos:</span><br>
                        <span class="font-bold">Nombre:</span> ${petSelected.name}<br>
                        <span class="font-bold">Edad:</span> ${petSelected.age}<br>
                        <span class="font-bold">Raza:</span> ${petSelected.race}<br>
                        <span class="font-bold">Descripción:</span> ${petSelected.description}
            </p>
            <p><span class="font-bold important">Nuevos Datos:</span><br>
                        <span class="font-bold">Nombre:</span> ${name}<br>
                        <span class="font-bold">Edad:</span> ${age}<br>
                        <span class="font-bold">Raza:</span> ${race}<br>
                        <span class="font-bold">Descripción:</span> ${description}
            </p>`);

        if(!confim) {
            await Deny('Cancelación', `<p class="font-text-1">Se cancelo la operación con éxito.</p>`)
            ClearUpdateButtonsPetsUI();
            return;
        }

        UpdatePet(name, age, race, description);

        let pets = GetAllPets();
        LocalStorageAdd('pets', pets);
        CreatePetsCard(pets);

        await Succes('Éxito', `<p class="font-text-1">Se actualizo la mascota con éxito.</p>`)
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnPetUpdate-Event-Click': ${err.message}\n${err}`)
        await Deny(`Ocurrió un error: ${err.message}`);
    }

    ClearUpdateButtonsPetsUI();
    location.reload();
});