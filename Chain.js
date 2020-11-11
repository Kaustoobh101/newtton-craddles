class Chain {
    constructor(bodyA,bodyB,pointB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
    this.chain=Constraint.create(options);
    this.pointB=pointB;

    World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointBx=this.chain.bodyB.position.x+this.pointB.x;
        var pointBy=this.chain.bodyB.position.y+this.pointB.y;
        strokeWeight(4);
    line(pointA.x,pointA.y,pointBx,pointBy);

    }
}