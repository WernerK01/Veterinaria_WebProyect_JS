import { GetClients } from "../../functions/client/functionsClient.js";
import { CreateClientsCards } from "../../functions/dom/Cards/createClientCard.js";
import { MessageError } from "../../functions/messges.js";

const clients = GetClients();

try {
    CreateClientsCards(clients);
} catch(err) {
    console.error(`[ERROR]: Se generó un error en 'Events-AddAllClientsCard': ${err.message}\n${err}`)
    MessageError(`Ocurrió un error: ${err.message}`);
}