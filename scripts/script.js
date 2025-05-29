import { BtnSearchToggler } from './functions/searchBtn.js';

const btnSearchToggle = document.querySelector('#btnSearchToggle');
const btnSearch = document.querySelector('#btnSearch');

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