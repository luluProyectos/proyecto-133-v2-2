/**7. define una variable que se utilizará para contener la imagen. */
img="";

/**8. Define la función preload(). y carga la imagen */
function preload(){
    img=loadImage("dog_cat.jpg");
}

/**6. Primero, definimos una función setup() y luego agregaremos el código para crear un lienzo dentro del mismo.*/
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    text("Perro", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 60, 450, 350 );
  }
