import { GetLocalStorege, LocalStorageAdd } from "../localStorege.js";

let clients = GetLocalStorege('clients');

export function GetClients() {
    return clients;
}

export function AddClient(name, lastName, phoneNumer, mail) {
    let id;

    if(clients.length === 0) id = 1;
    else id = clients[clients.length - 1].id + 1;

    clients.push({
        id: id,
        name: name,
        lastName: lastName,
        phoneNumer: phoneNumer,
        mail: mail
    });
}

export function RemoveCLient(client) {
    clients.splice(clients.indexOf(client), 1);
    LocalStorageAdd('clients', clients);
}