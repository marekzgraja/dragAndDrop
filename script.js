var drag = document.querySelectorAll('.item');
var dropzone = document.querySelectorAll('.dropzone');

//ondragover
//ondrop 

var dragger;

drag.forEach(item => {
    item.addEventListener('dragstart', onDragStart, false);
});

dropzone.forEach(zone => { 
    console.log('here');
    zone.addEventListener('dragover', onDragOver, false);
    zone.addEventListener('drop', onDrop, false);
});


function onDragStart(event){ 
    //event.dataTransfer.setData('text/plain', null);

    console.log(event.target.id);

    dragged = event.target;

    event.currentTarget.style.backgroundColor = 'green';
}

function onDragOver(event){
    console.log('drag');
    event.preventDefault(); 
}

function onDrop(event){
    console.log('drop');
    //const id = event.dataTransfer.getData('text');
    event.preventDefault(); 


    //const draggableElement = document.getElementById(id);
    const dropzone = event.currentTarget;
    dragged.parentNode.removeChild(dragged);
    dropzone.appendChild( dragged ); 
    //event.dataTransfer.clearData(); 
}