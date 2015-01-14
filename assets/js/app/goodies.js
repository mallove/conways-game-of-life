/*
* Set of extensions and polyfills which make life[.js] easier.
*/

window.performance = (window.performance || {
    offset: Date.now(),
    now: function now() {
        return Date.now() - this.offset;
    }
});

window.width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

window.height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

function hello(a) {
    console.log(a);
}