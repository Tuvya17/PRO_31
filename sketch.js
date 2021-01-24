const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(800,800);
  ground = new Ground(400,790,800,20);
  
  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Divisions(k, height-300/2, 10, 300)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75,10)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,150,10)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,225,10)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,300,10)); 
  }
}

function draw() {
  background("black");  
  
  Engine.update(engine);
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display(); 
  }
  
  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display(); 
 }

 if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
  } 
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display(); 
}

}