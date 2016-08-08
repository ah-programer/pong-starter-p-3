export default class Paddle {
    constructor(boardHeight, x, control, score) {
        this.width = 5;
        this.height = 35;
        this.x = x;
        this.y = (boardHeight / 2) - (this.height / 2);
        this.speed = (10);
        this.maxHeight = boardHeight;
        this.score = score;



        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case control.up:
                    this.y = Math.max(
                        0,
                        this.y - this.speed
                    );
                    console.log('up');
                    break;
                case control.down:
                    this.y = Math.min(
                        this.maxHeight - this.height,
                        this.y + this.speed
                    );
                    console.log('down');
                    break;
            }
        });
   }



//  scoreMethod(){
  // this.score = score++;
  //}

  render(context) {
      context.fillStyle = 'red';
      context.fillRect(
          this.x, this.y,
          this.width, this.height
      );

    }
  }
