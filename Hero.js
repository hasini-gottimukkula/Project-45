class Hero {
    constructor(x, y) {

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("hero.png");

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}