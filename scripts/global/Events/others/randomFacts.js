import { AddText } from "../../functions/dom/texts.js";
import { ToggleSnipper } from "../../functions/dom/spinner.js";
import { MessageError } from "../../functions/messges.js";

const API_URL_CATS = "https://meowfacts.herokuapp.com/?lang=esp"
const API_URL_DOGS = "https://dogapi.dog/api/v2/facts";

const facts = document.querySelector('#facts');

try {
    const resultCats = await fetch(API_URL_CATS);
    const factCats = await resultCats.json();
    AddText('catsRandomFacts', factCats.data);

    const resultDogs = await fetch(API_URL_DOGS);
    const factDogs = await resultDogs.json();
    AddText('dogsRandomFacts', factDogs.data[0].attributes.body);

    ToggleSnipper(false);
    facts.className = "";

} catch(err) {
    console.error(`[ERROR]: Se generó un error en 'catsRandomFacts-Event': ${err.message}\n${err}`)
    MessageError(`Ocurrió un error: ${err.message}`);
}