class rope{
  constructor(bodyA,pointB){
    var option = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 1,
    length: 50
     }
 this.rope = Constraint.create(option);
 this.pointB = pointB;
 World.add(world,this.rope);
  }

  attached(param){
    this.rope.bodyA = param;
  }

 display(){
 if(this.rope.bodyA){
 var pointA = this.rope.bodyA.position;
 var pointB = this.pointB;
 push();
 strokeWeight(5);
 line(pointA.x,pointA.y,pointB.x,pointB.y);
 pop();
 }
 }

 fly(){
 this.rope.bodyA = null;
 }

}