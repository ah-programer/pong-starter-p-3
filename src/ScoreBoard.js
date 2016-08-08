export default class ScoreBoard {
   constructor(x, y) {
      this.x = x;
      this.y = y;
      this.score = 0;
   }
   render(ctx) {
      ctx.font = "25px Helvetica";
      ctx.fillText(this.score, this.x, this.y);
   }
}
