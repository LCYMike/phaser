var game = new Phaser.Game(
    800, 600, 
     Phaser.CANVAS, 
      'phaser-example', 
       { preload: preload, create: create, update: update });


    var frame = 0;


function preload () {
    console.log('preload');
}

function create() {
    console.log('create');
}

function update () {
    frame++;
    console.log('frame : ' + frame);        
}