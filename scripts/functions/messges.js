export function MessageSucces(args) {
    Toastify({
        text: args,
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: 'linear-gradient(to right, #31e2b4, #5A8)',
            color: "#ffffff",
            borderRadius: "5px"
        }
    }).showToast();
}

export function MessageError(args) {
    Toastify({
        text: args,
        avatar: '../img/x-circle.svg',
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: 'linear-gradient(to right, #F02040,rgb(165, 20, 42))',
            color: "#ffffff",
            borderRadius: "5px"
        }
    }).showToast();
}