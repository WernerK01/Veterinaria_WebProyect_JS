import { GetPet, GetSetSelectedPet } from "../../functions/pets/functionsPets.js";
import { MessageError } from "../../functions/messges.js";
import { UpdateButtonPetUI } from "../../functions/dom/buttons.js";

const btnPetsSelects = document.querySelectorAll('#btnPetSelect');

btnPetsSelects.forEach((button) => {
    button.addEventListener('click', () => {
        const petID = parseInt(button.getAttribute('data-pet-id'));
        const petFound = GetPet(petID);

        if(petFound === undefined) {
            MessageError('No se encontro a la mascota.');
            return;
        }

        try {
            GetSetSelectedPet(petFound);
            UpdateButtonPetUI(petFound);
        } catch(err) {
            console.error(`[ERROR]: Se generó un error en 'btnPetSelection-Event-Click': ${err.message}\n${err}`)
            MessageError(`Ocurrió un error: ${err.message}`);
        }
    });
});