const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Create multiple bobs, mulitple ropes varibale here

var bob1, bob2, bob3, bob4, bob5;
var rope, roof ,roof_options

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

   roof = new Roof(350, 100, 300, 30);
   World.add(world, roof);

	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(250, 300, 40);
	World.add(world,bob1);


   bob2 = Bodies.circle(300, 300, 40);
	World.add(world,bob2);


   bob3 = Bodies.circle(350, 300, 40);
	World.add(world,bob2);


	bob4 = Bodies.circle(400, 300, 40);
	World.add(world,bob2);


	bob5 = Bodies.circle(450, 300, 40);
	World.add(world,bob2);
	bob1=new Bob(20,20,30,50)
    
	rope1 = new Rope(bob1.body.roof, -100, 0);
	World.add(world, rope1);

	rope2 = new Rope(bob2.body.roof, -50, 0);
	World.add(world, rope2);


	rope2 = new Rope(bob3.body.roof, 0, 0);
	World.add(world, rope3);

	rope2 = new Rope(bob4.body.roof, +50, 0);
	World.add(world, rope4);


	rope2 = new Rope(bob5.body.roof, +100, 0);
	World.add(world, rope5);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
 roof.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();


  
  //create ellipse shape for multiple bobs here
   ellipse(bob1.position.x,bob1.position.y,20);
  //ground.show();
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);
  





 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-730, y:0});
	}
}