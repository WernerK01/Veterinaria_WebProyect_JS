const inputClienName = document.querySelector('#inputClientName');
const inputClientLastName = document.querySelector('#inputClientLastName');
const inputClientPhoneNumer = document.querySelector('#inputClientPhoneNumer');
const inputClientMail = document.querySelector('#inputClientMail');

const inputPetName = document.querySelector('#inputPetName');
const inputPetAge = document.querySelector('#inputPetAge');
const inputPetRace = document.querySelector('#inputPetRace');
const textAreaPetDetails = document.querySelector('#textAreaPetDetails');

export function ClearUIClients() {
    inputClienName.value = ""
    inputClientLastName.value = "";
    inputClientPhoneNumer.value = "";
    inputClientMail.value = "";
}

export function UpdateClientInputs(selection) {
    inputClienName.value = selection.name;
    inputClientLastName.value = selection.lastName;
    inputClientPhoneNumer.value = selection.phoneNumer;
    inputClientMail.value = selection.mail;
}

export function ClearUIPets() {
    inputPetName.value = ""
    inputPetAge.value = ""
    inputPetRace.value = ""
    textAreaPetDetails.value = ""
}