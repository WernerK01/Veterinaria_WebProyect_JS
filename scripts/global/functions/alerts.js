const swalBoostrapSucces = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-outline-success m-1',
        cancelButton: 'btn btn-outline-danger m-1',
        closeButton: 'btn btn-outline-danger m-1'
    },
    showClass: {
        popup: ` animate__animated animate__fadeInUp animate__faster `
    },
    hideClass: {
        popup: ` animate__animated animate__fadeOutDown animate__faster`
    },
    buttonsStyling: false,
    theme: 'dark',
    background: '#0F0F1A',
    position: 'center',
    allowOutsideClick: false,
    allowEscapeKey: false,
});

export async function Succes(title, args) {
    await swalBoostrapSucces.fire({
        title: `<h2 class="font-bold">${title}</h2>`,
        html: args,
        icon: 'success',
        iconColor: '#31e2b4',
    });
}

export async function Deny(title, args) {
    await swalBoostrapSucces.fire({
        title: `<h2 class="font-bold">${title}</h2>`,
        html: args,
        icon: 'error',
        iconColor: '#F02040',
    });
}

export async function Valid(title, args) {
    let validation;

    await swalBoostrapSucces.fire({
        title: `<h2 class="font-bold">${title}</h2>`,
        html: args,
        icon: 'question',
        iconColor: '#FC2',
        confirmButtonText: 'Confirmar',
        showConfirmButton: true,
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
    }).then((result) => {
        if(result.isConfirmed) validation = true;
        else if(result.dismiss) validation = false;
        else validation = false;
    });

    return validation;
}