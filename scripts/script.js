import { BtnSearchToggler } from './functions/searchBtn.js';
import { LocalStorageAdd, LocalStorageClear } from './functions/localStorege.js';
import { MessageSucces, MessageError } from './functions/messges.js'
 
const btnSearchToggle = document.querySelector('#btnSearchToggle');
const btnSearch = document.querySelector('#btnSearch');

const btnGlobalClearClient = document.querySelector('#btnGlobalClearClient');
const btnGlobalClearPet = document.querySelector('#btnGlobalClearPet');

let clients = [];
let pets = [];


btnSearchToggle.addEventListener('click', (event) => {
    try {
        BtnSearchToggler(true);
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnSearchToggle-Event-Click': ${err.message}\n${err}`);
    }
});

btnSearch.addEventListener('click', () => {
    try {
        BtnSearchToggler(false);
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnSearch-Event-Click': ${err.message}\n${err}`);
    }
});

btnGlobalClearClient.addEventListener('click', () => {
    try {
        LocalStorageClear('Clients', clients);
        MessageSucces(`Se Limpió el LocalStorege de los clientes.`)
        console.log('Paso por acá')
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearClient-Event-Click': ${err.message}\n${err}`)
        MessageError(`${err.message}`);
    }
});

btnGlobalClearPet.addEventListener('click', () => {
    try {
        LocalStorageClear('Pets', pets);
    } catch(err) {
        console.error(`[ERROR]: Se generó un error en 'btnGlobalClearPet-Event-Click': ${err.message}\n${err}`)
    }
});