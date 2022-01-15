var gato1, gato2, gato3
var rato1, rato2, rato3
var fundo
var gato, rato



function preload() {
   
   gato1 = loadAnimation("images/cat1.png")
   gato2 = loadAnimation("images/cat2.png","images/cat3.png")
   gato3 = loadAnimation("images/cat4.png")
   rato1 = loadAnimation("images/mouse1.png")
   rato2 = loadAnimation("images/mouse2.png","images/mouse3.png")
   rato3 = loadAnimation("images/mouse4.png")
   fundo = loadImage("images/garden.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);

    gato = createSprite(870,600)
    gato.addAnimation("gatoDormindo",gato1)
    gato.scale =0.2
    rato = createSprite(200,600)
    rato.addAnimation("ratoEsperando",rato1)
    rato.scale =0.15

    //create tom and jerry sprites here
}

function draw() {

     if(gato.isTouching(rato)){
         gato.velocity = 0
         gato.addAnimation("gatoParada",gato3)
         gato.changeAnimation("gatoParada")
         rato.addAnimation("ratocontinuaParado",rato3)
         rato.changeAnimation("ratocontinuaParado")
     }



    background(fundo);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

     if(keyDown("left")){
         gato.velocityX = -5
         gato.addAnimation("gatoAndando",gato2)
         gato.changeAnimation("gatoAndando")
         rato.addAnimation("ratomaozinha",rato2)
         rato.changeAnimation("ratomaozinha")
     } 


  //For moving and changing animation write code here


}
