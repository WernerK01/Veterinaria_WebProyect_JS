const clientContainer = document.querySelector('#clientContainer');

export function CreateClientsCards(clients) {
    clientContainer.innerHTML = "";

    clients.forEach((client) => {
        const clientCard = document.createElement("div");
        clientCard.className = "card m-3";
        clientCard.style.width = "18rem";

        clientCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title font-bold">${client.name} ${client.lastName}</h5>
                <p class="card-text"><span class="font-bold">ID del Cliente:</span> ${client.id}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="font-bold">Correo electrónico:</span> ${client.mail}</li>
                <li class="list-group-item"><span class="font-bold">Telefono:</span> ${client.phoneNumer}</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-outline-info" id="btnClientSelect" data-client-id="${client.id}" type="submit">
                <i class="bi bi-person-fill-gear"></i> Seleccionar</button>
            </div>
        `;

        clientContainer.appendChild(clientCard);
    });
}