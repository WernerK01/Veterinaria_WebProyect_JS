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
                <p class="card-text">
                    <span class="font-bold">ID del Cliente:</span> ${client.id}<br>
                    <span class="font-bold">Correo electrónico:</span> ${client.mail}<br>
                    <span class="font-bold">Telefono:</span> ${client.phoneNumer}
                </p>
            </div>
            <div class="card-body">
                <button class="btn btn-outline-info" id="btnClientSelect" data-client-id="${client.id}" type="submit">
                    <i class="bi bi-hand-index-thumb-fill"></i> Seleccionar</button>
                <button class="btn btn-outline-danger" id="btnClientRemove" data-client-id="${client.id}" type="submit">
                    <i class="bi bi-trash3-fill"></i> Eliminar</button>
            </div>
        `;

        clientContainer.appendChild(clientCard);
    });
}