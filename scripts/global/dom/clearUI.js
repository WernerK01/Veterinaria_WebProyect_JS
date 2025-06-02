export function ClearUIClients() {
    document.querySelector('#inputClientName').value = ""
    document.querySelector('#inputClientLastName').value = "";
    document.querySelector('#inputClientPhoneNumer').value = "";
    document.querySelector('#inputClientMail').value = "";
}

export function ClearUIPets() {
    document.querySelector('#inputPetName').value = ""
    document.querySelector('#inputPetAge').value = ""
    document.querySelector('#inputPetRace').value = ""
    document.querySelector('#textAreaPetDetails').value = ""
}