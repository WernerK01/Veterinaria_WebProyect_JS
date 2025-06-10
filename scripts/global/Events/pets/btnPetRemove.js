import { Valid, Succes, Deny } from "../../functions/alerts.js";
import { ClearUpdateButtonsPetsUI } from "../../functions/dom/buttons.js";
import { MessageError } from "../../functions/messges.js";
import { GetPet, GetAllPets, RemovePet } from "../../functions/pets/functionsPets.js";
import { CreatePetsCard } from "../../functions/dom/cards/createPetsCard.js";
import { LocalStorageAdd } from "../../functions/localStorege.js";

const btnPetsRemove = document.querySelectorAll('#btnPetRemove');

btnPetsRemove.forEach((button) => {
    button.addEventListener('click', async () => {
        const petID = parseInt(button.getAttribute('data-pet-id'));
        const petFound = GetPet(petID);

        if(petFound === undefined) {
            MessageError('No se encontro a la mascota.');
            return;
        }

        try {
            let confim = await Valid('Confirmación', `<p class="font-text-1">Por favor, confirma sí deseas eliminar a la mascota <span class="font-bold important">${petFound.name}</span>.</p>`)
            if(!confim) {
                await Deny('Cancelación', `<p class="font-text-1">Se cancelo la operación con éxito.</p>`);
                ClearUpdateButtonsPetsUI();
                return;
            }
            
            RemovePet(petFound);

            let pets = GetAllPets();
            LocalStorageAdd('pets', pets);
            CreatePetsCard(pets);

            await Succes('Éxito', `<p class="font-text-1">Se elimino a la mascota con éxito.</p>`);

        } catch(err) {
            console.error(`[ERROR]: Se generó un error en 'btnPetRemove-Event-Click': ${err.message}\n${err}`)
            await Deny(`Ocurrió un error: ${err.message}`);
        }

        ClearUpdateButtonsPetsUI();
        location.reload();
    });
});