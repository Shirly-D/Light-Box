var box = document.querySelectorAll('.content-box');
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function(e){
        var boxElem = e.currentTarget.getAttribute('data-image');
        var text = e.currentTarget.getAttribute('data-text');
        lightBox(boxElem, text);
    })
}

var ligBox = document.querySelector('.box');
var elem = document.querySelector('.image-box');

function lightBox(box, text) {
    ligBox.classList.add('active');   
    elem.setAttribute("src", box);
    var textElem = document.querySelector('.box-text');
    textElem.innerHTML = text;
}

ligBox.addEventListener('click', function(e){
    var close = document.querySelector('.close');
    if (ligBox == e.target || close == e.target) {
        ligBox.classList.remove('active');
    }
})























