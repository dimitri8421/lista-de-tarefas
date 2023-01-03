const bottom = document.querySelectorAll(".bottom");
const topP = document.querySelectorAll(".top");

function css(obj = {}, element) {
    obj = Object.entries(obj);

    obj.map((value) => {
        element.style[value[0]] = value[1];
    })
}

if (window.screen.width <= 700) {
    css({
        'right': '-22px',
        'top': '1px',
        'height': '6em',
        'width': '6em'

    }, bottom[0]);

    css({
        'right': '1em',
        'bottom': '2px',
        'height': '6em',
        'width': '6em'
    }, bottom[1]);

    css({
        'top': '-18px',
        'left': '0em',
        'height': '3em',
        'width': '3em'
    }, topP[0]);

    css({
        'bottom': '1em',
        'left': '-2em',
        'height': '4em',
        'width': '4em'
    }, topP[1]);
} else {
    css({
        'right': '-55px',
        'top': '15px',
        'height': '10em',
        'width': '10em'
    }, bottom[0]);

    css({
        'right': '1em',
        'bottom': '6px',
        'height': '10em',
        'width': '10em'
    }, bottom[1]);

    css({
        'top': '-23px',
        'left': '2em'
    }, topP[0]);

    css({
        'bottom': '1em',
        'left': '-4em',
        'height': '9em',
        'width': '9em'
    }, topP[1]);
}
