function sum(x) {
    function sum1(y) {
        return x + y;
    }
    return sum1;
}

console.log(sum(2)(5));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let tag = document.getElementsByTagName('p');
for (let i = 0; i < colors.length; i++) {
    tag[i].addEventListener("click", SwitchColor());
}

function SwitchColor() {
    let color = 0;
    return function () {
        this.style.color = colors[color];
        color++;
        if (color === colors.length) {
            color = 0;
        }
    }
}