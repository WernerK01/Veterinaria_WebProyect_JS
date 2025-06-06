const spinner = document.querySelector('#loader');

export function ToggleSnipper(option) {
    switch(option) {
        case false: 
            spinner.className = "spinner-border spinner visually-hidden";
            break;

        case true:
            spinner.className = "spinner-border spinner";
            break;
    }
}