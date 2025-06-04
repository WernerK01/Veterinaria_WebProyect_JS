import { GetLocalStorege, LocalStorageAdd } from "../localStorege.js";

let clients = GetLocalStorege('clients');
let selectedClient;

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

export function RemoveClient(client) {
    clients.splice(clients.indexOf(client), 1);
    LocalStorageAdd('clients', clients);
}

export function UpdateClient(name, lastName, phoneNumer, mail) {
    let oldClient = GetClient(selectedClient.id);

    oldClient.name = name;
    oldClient.lastName = lastName;
    oldClient.phoneNumer = phoneNumer;
    oldClient.mail = mail;
}

export function GetClient(id) {
    let client = clients.find(x => x.id === id);
    return client;
}

export function GetSetSelectedClient(selection) {
    if(selection !== undefined) selectedClient = selection;
    else return selectedClient;
}