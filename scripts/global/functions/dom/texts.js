export function AddText(idSection, args) {

    const ObtainedidSection = document.querySelector(`#${idSection}`);
    ObtainedidSection.innerHTML = "";
    ObtainedidSection.className = "d-flex justify-content-center align-items-center"

    ObtainedidSection.innerHTML = `<p class="fs-5 fw-semibold flex-warp">${args}</p>`
}