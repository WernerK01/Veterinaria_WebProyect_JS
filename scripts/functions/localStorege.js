export function LocalStorageAdd(name, content) {
    if(typeof(name) != 'string') throw new Error(`El nombre ${name} es inválido.`);
    if(localStorage.getItem(`${name}`) !== null) throw new Error(`El LocalStorege ${name} ya está creado.`);

    localStorage.setItem(`${name}`, JSON.stringify(content));
}

export function LocalStorageClear(name, content) {
    if(typeof(name) !== 'string') throw new Error(`El nombre ${name} es inválido.`);
    if(content.length == 0) throw new Error(`El contenido del Array está vació. No hay nada que borrar.`);
    if(localStorage.getItem(`${name}`) === null ) throw new Error(`No existe el LocalStorage ${name}`);

    localStorage.setItem(`${name}`, JSON.stringify(content));
}