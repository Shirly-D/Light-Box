var box = document.querySelectorAll('.content-box');
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function(e){
        var boxElem = e.currentTarget.getAttribute('data-image');
        var text = e.currentTarget.getAttribute('data-text');
        lightBox(boxElem);
    })
}

function lightBox(box, boxText) {
    var lightBox = document.querySelector('.box');
    lightBox.classList.add('active');   
    var elem = document.querySelector('.image-box');
    elem.setAttribute("src", box);

    lightBox.addEventListener('click', function(e){
        lightBox.classList.remove('active');
    })
}























