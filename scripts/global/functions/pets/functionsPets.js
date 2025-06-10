import { GetLocalStorege } from "../localStorege.js";

let pets = GetLocalStorege('pets');
let selectedPet;

export function GetAllPets() {
    return pets;
}

export function GetPet(petID) {
    let petFound = pets.find(x => x.id == petID);
    return petFound;
}

export function AddPet(name, age, race, description, clientID) {
    let id;

    if(pets.length === 0) id = 1;
    else id = pets[pets.length - 1].id + 1;

    pets.push({
        id: id,
        name: name,
        age: age,
        race: race,
        description: description,
        clientID: clientID 
    });
}

export function RemovePet(pet) {
    pets.splice(pets.indexOf(pet), 1);
}

export function RemovePetOfClients(client) {
    pets.forEach((pet) => {
        if(pet.clientID == client.id) {
            RemovePet(pet);
        }
    });
}

export function UpdatePet(name, age, race, description) {
    let oldPet = GetPet(selectedPet.id)

    oldPet.name = name;
    oldPet.age = age;
    oldPet.race = race;
    oldPet.description = description;
}

export function GetSetSelectedPet(pet) {
    if(pet !== undefined) selectedPet = pet;
    else return selectedPet;
}

export function ClearPets() {
    pets = []
    return pets;
}