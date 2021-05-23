class Building {
    constructor(x, y) {

        this.body = Bodies.rectanlge(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("building.png");

        World.add(world, this.body);
    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}