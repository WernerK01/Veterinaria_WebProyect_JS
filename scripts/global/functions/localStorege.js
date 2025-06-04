export function LocalStorageAdd(name, content) {
    if(typeof(name) != 'string') throw new Error(`El nombre ${name} es inválido.`);

    localStorage.setItem(name, JSON.stringify(content));
}

export function LocalStorageClear(name, content) {
    if(typeof(name) != 'string') throw new Error(`El nombre ${name} es inválido.`);
    if(localStorage.getItem(`${name}`) === null ) throw new Error(`No existe el LocalStorage ${name}`);

    localStorage.setItem(name, JSON.stringify(content));
}

export function GetLocalStorege(name) {
    if(typeof(name) != 'string') throw new Error(`El nombre ${name} es inválido.`);

    return JSON.parse(localStorage.getItem(name)) || [];
}