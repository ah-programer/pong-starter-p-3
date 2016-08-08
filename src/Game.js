import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import ScoreBoard from './ScoreBoard';

const gap = 10;
var p1keys = {
    up: 38,
    down: 40,
};
var p2keys = {
    up: 65,
    down: 90,
};

export default class Game {
    constructor() {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'red';
        this.board = new Board(this.width,this.height);
        this.scoreBoard1 = new ScoreBoard(75,25);
        this.scoreBoard2 = new ScoreBoard(200,25);
        this.player1 = new Paddle(this.height, gap, p1keys);
        this.player2 = new Paddle(this.height, this.width - 4 - gap, p2keys);
        this.ball = new Ball(this.height, this.width);

        console.log(this.player1, this.player2);
    }

    render() {
        this.board.render(this.context);
        this.player1.render(this.context);
        this.player2.render(this.context);
        this.ball.render(this.context, this.player1, this.player2);
        this.scoreBoard1.render(this.context);
        this.scoreBoard2.render(this.context);

        // add here
    }
}
