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

function spawnJewel() {
    if (frameCount % 80 === 0) {
        var jewel = createSprite(526, 541, 50, 30);
        jewel.scale = 0.3;
        jewel.velocityX = 3;
        //Generate random jewels
        var rand = Math.round(random(40, 110));
        jewelsGroup.add(jewel);
    }
}