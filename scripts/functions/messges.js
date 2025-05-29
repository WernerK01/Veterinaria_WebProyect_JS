export function MessageSucces(args) {
    Toastify({
        text: args,
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: '#0F0F1A',
            color: "#31e2b4",
            borderColor: '#31e2b4',
            borderRadius: "5px"
        }
    }).showToast();
}

export function MessageError(args) {
    Toastify({
        text: args,
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: ' #0F0F1A',
            color: "#F02040",
            borderColor: '#F02040',
            borderRadius: "5px"
        }
    }).showToast();
}

export function MessageWarning(args) {
    Toastify({
        text: args,
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: ' #0F0F1A',
            color: '#FC2',
            borderColor: '#FC2',
            borderRadius: "5px"
        }
    }).showToast();
}