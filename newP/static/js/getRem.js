$(window).resize( function () {
    getSize();
})
function getSize() {
    var winWidth = window.screen.availWidth;
    var font_Size = 50*(winWidth/375);
    document.getElementsByTagName('html')[0].style.fontSize = font_Size + "px";
    console.log(font_Size)
}
getSize();
// document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
// }, false);