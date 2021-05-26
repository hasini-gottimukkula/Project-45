class Ground {
    constructor(x, y) {
        var options = {
            isStactic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}