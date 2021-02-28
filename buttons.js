function a(dir) {
    window.location.href = window.location.href+dir;
}
function b(dir) {
    window.location.href = dir;
}

function goto(dir) {
    setTimeout(a(dir), 250);
}
function gotoWeb(dir) {
    setTimeout(b(dir), 250);
}