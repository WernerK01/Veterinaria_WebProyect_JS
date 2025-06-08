const petContainer = document.querySelector('#petContainer');

export function CreatePetsCard(pets) {
    petContainer.innerHTML = '';

    pets.forEach((pet) => {
        const card = document.createElement('div');
        card.className = "card m-3";
        card.style.width = "18rem";

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title font-bold">${pet.name}</h5>
                <p class="card-text">
                    ${pet.description}<br>
                    <span class="font-bold">Edad:</span> ${pet.age}<br>
                    <span class="font-bold">Raza:</span> ${pet.race}
                </p>
            </div>
            <div class="card-body">
                <button class="btn btn-outline-info" id="btnPetSelect" data-client-id="${pet.id}" type="submit">
                    <i class="bi bi-hand-index-thumb-fill"></i> Seleccionar</button>
                <button class="btn btn-outline-danger" id="btnPetRemove" data-client-id="${pet.id}" type="submit">
                    <i class="bi bi-trash3-fill"></i> Eliminar</button>
            </div>
        `;

        petContainer.appendChild(card);
    });
}