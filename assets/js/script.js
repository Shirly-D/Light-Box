var box = document.querySelectorAll('.content-box');
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function(e){
        var boxElem = e.currentTarget.getAttribute('data-image');
        var text = e.currentTarget.getAttribute('data-text');
        lightBox(boxElem, text);
    })
}

function lightBox(box, boxText) {
    var lightBox = document.querySelector('.box');
    lightBox.classList.add('active');   
    var elem = document.querySelector('.image-box');
    elem.setAttribute("src", box);
    var textElem = document.querySelector('.box-text');
    textElem.innerHTML = "data-text";
    lightBox.addEventListener('click', function(){
        lightBox.classList.remove('active');
    })
}























