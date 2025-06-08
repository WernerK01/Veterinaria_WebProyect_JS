import { GetAllPets } from "../../functions/pets/functionsPets.js";
import { MessageError } from "../../functions/messges.js";
import { CreatePetsCard } from "../../functions/dom/Cards/createPetsCard.js";

const pets = GetAllPets();

try {
    CreatePetsCard(pets);
} catch(err) {
    console.error(`[ERROR]: Se generó un error en 'AddAllPetsCard-Event': ${err.message}\n${err}`)
    MessageError(`Ocurrió un error: ${err.message}`);
}