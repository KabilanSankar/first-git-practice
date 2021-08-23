var player
var wormgroup
function preload() {
  //load game assets

}


function setup() {
  createCanvas(600,600);
 player=createSprite(30,30,20,20)
 wormgroup=new Group()

}

function draw() {
  background("black"); 
  stroke("lightgreen")
  ellipse(300,300,30,20)
  player.x=mouseX
  player.y=mouseY
generateworms()
for(var i=0; i<wormgroup.length;i++){
  var temp=(wormgroup).get(i)
  if(player.isTouching(temp)){
    temp.destroy()
    temp=null
  }
}
  drawSprites()

}
function generateworms(){
if(frameCount%30==0){
worms=createSprite(300,300,30,2)
worms.velocityX=random(-5,5)
worms.velocityY=random(-5,5)
worms.shapeColor="green"
wormgroup.add(worms)


}


}