const swalBoostrapSucces = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-outline-success',
        cancelButton: 'btn btn-outline-danger',
        closeButton: 'btn btn-outline-danger',
    },
    buttonsStyling: false,
    theme: 'dark',
    background: '#0F0F1A',
    position: 'center',
});

export function Succes(title, args) {
    swalBoostrapSucces.fire({
        title: title,
        text: args,
        icon: 'success',
        iconColor: '#31e2b4',
    });
}

export function Deny(title, args) {
    swalBoostrapSucces.fire({
        title: title,
        text: args,
        icon: 'error',
        iconColor: '#F02040',
    });
}

export async function Valid(title, args) {
    let validation;

    await swalBoostrapSucces.fire({
        title: title,
        text: args,
        icon: 'warning',
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