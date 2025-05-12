class VictoryScreen extends Phaser.Scene {
  constructor() {
    super("victoryScreenScene");
  }

  create() {
    this.add.image(400, 300, "lion");

    this.add
      .text(400, 500, "Thanks for playing!", {
        fontSize: "32px",
        fill: "#fff",
      })
      .setOrigin(0.5);

    this.add
      .text(400, 550, "Refresh the page to play again", {
        fontSize: "24px",
        fill: "#fff",
      })
      .setOrigin(0.5);
  }
}
