class Jewel {
    constructor(x, y, radius) {

        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("jewel.png");
    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, this.radius);
    }
}