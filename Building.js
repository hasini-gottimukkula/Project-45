class Building {
    constructor(x, y) {

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("building.png");

        World.add(world, this.body);
    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}

function spawnBuildings() {
    if (frameCount % 100 === 0) {
        var buildings = createSprite(526, 541, 50, 30);
        buildings.scale = 0.3;
        buildings.velocityX = 3;
        //Generate random buildings
        var rand = Math.round(random(40, 110));
        buildingsGroup.add(building);
    }
}