
var box = document.querySelectorAll('.content-box');
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function(e){
        var boxElem = e.target.getAttribute('src');
        lightBox(boxElem);

         
        console.log(this, e.target);
        
    })
}

function lightBox(box) {
    var lightBox = document.querySelector('.box');
    lightBox.classList.add('active');   
    var elem = document.querySelector('.light-box');
    console.log(elem);
    elem.setAttribute("src", box);
}























