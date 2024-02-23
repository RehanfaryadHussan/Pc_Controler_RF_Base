let con = (a='Done') => {
    console.log(a)
}
let done = (a='Done') => {
    console.log(a)
}
let s = function (a) {
    return document.querySelector(a);
}
Object.prototype.s = s;


let hide = function () {
    this.style.display = `none`
}
Object.prototype.hide = hide;
let show = function (a = 'block') {
    this.style.display = a;
}
Object.prototype.show = show;

let copy = function (a, b) {
    let txt = b.textContent;
    let rettxt = a.textContent;
    a.addEventListener('click', () => {
        navigator.clipboard.writeText(txt).then(() => {
            a.textContent = `Copied!`;
            setTimeout(() => {
                a.textContent = rettxt;
            }, 1500);
        });
    });
};