class Load extends Phaser.Scene {
  constructor() {
    super("loadScene");
  }

  preload() {
    this.load.setPath("./assets/");

    // Load characters spritesheet
    this.load.atlas(
      "platformer_characters",
      "tilemap-characters-packed.png",
      "tilemap-characters-packed.json"
    );

    // Load tilemap information
    this.load.spritesheet("tilemap_tiles", "tilemap_packed.png", {
      frameWidth: 18,
      frameHeight: 18,
    }); // Packed tilemap
    this.load.tilemapTiledJSON("platformer-level-1", "platformer-level-1.tmj"); // Tilemap in JSON
    this.load.image(
      "tilemap-backgrounds_packed",
      "tilemap-backgrounds_packed.png"
    );
    this.load.image("lion", "lion.png");
    this.load.tilemapTiledJSON(
      "platformer-level-1B",
      "platformer-level-1B.tmj"
    ); // Tilemap in JSON

    this.load.audio("jump1", "Jump1.mp3");
    this.load.audio("jump2", "Jump2.mp3");
    this.load.audio("jump3", "Jump3.mp3");
    this.load.audio("coin_collect", "coin.mp3");
    this.load.audio("splash", "splash.mp3");
    this.load.audio("checkpoint", "checkpoint.ogg");
    this.load.audio("diamond_collect", "diamond.mp3");
    this.load.audio("enemy_death", "enemy_death.mp3");
    this.load.audio("player_death", "player_death.mp3");
    this.load.audio("music", "sonnys_song.mp3");
  }

  create() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNames("platformer_characters", {
        prefix: "tile_",
        start: 0,
        end: 1,
        suffix: ".png",
        zeroPad: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "idle",
      defaultTextureKey: "platformer_characters",
      frames: [{ frame: "tile_0000.png" }],
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      defaultTextureKey: "platformer_characters",
      frames: [{ frame: "tile_0001.png" }],
    });

    this.anims.create({
      key: "coin",
      defaultTextureKey: "tilemap_tiles",
      frames: [{ frame: 151 }, { frame: 152 }],
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: "enemy",
      frames: this.anims.generateFrameNames("platformer_characters", {
        prefix: "tile_",
        start: 18,
        end: 19,
        suffix: ".png",
        zeroPad: 4,
      }),
      frameRate: 8,
      repeat: -1,
    });

    // ...and pass to the next Scene
    this.scene.start("platformerScene");
  }

  // Never get here since a new scene is started in create()
  update() {}
}
