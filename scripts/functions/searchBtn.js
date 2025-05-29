const btnSearchToggle = document.querySelector('#btnSearchToggle');
const searchForm = document.querySelector('#searchForm');

export function BtnSearchToggler(option) {

    switch(option) {
        case true:
            btnSearchToggle.classList.add('visually-hidden');
            searchForm.classList.remove('visually-hidden');
        break;
        
        case false:
            btnSearchToggle.classList.remove('visually-hidden');
            searchForm.classList.add('visually-hidden');
        break;

        default:
            throw new Error('No se dió una opción válida.');
    }

}