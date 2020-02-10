function onClick(f) {
    return function (e) {
        e.addEventListener('click', f);
    };
}
function onFocusout(f) {
    return function (e) {
        e.addEventListener('focusout', f);
    };
}
function text(str) {
    return document.createTextNode(str);
}
function div(attributes, children) {
    var e = document.createElement('div');
    children.forEach(function (v) { return e.appendChild(v); });
    attributes.forEach(function (v) { return v(e); });
    return e;
}
function button(attributes, str) {
    var e = document.createElement('button');
    e.innerText = str;
    attributes.forEach(function (v) { return v(e); });
    return e;
}
function input(attributes, value) {
    var e = document.createElement('input');
    e.value = value;
    attributes.forEach(function (v) { return v(e); });
    return e;
}
