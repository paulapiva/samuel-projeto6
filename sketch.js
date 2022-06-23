var gol1;
var gol2
var tacoJogador
var atacante
var tacoComputador

var estadojogo = "start";
var placarJogador = 0;
var placarComputador = 0;
var edges
function setup() {
    createCanvas(400, 400);
    gol1 = createSprite(200, 28, 100, 20);
    gol1.shapeColor = "yellow";
    gol2 = createSprite(200, 372, 100, 20);
    gol2.shapeColor = "yellow";



    //jogador e jogadorComputador 
    tacoJogador = createSprite(200, 350, 50, 10);
    tacoJogador.shapeColor = "white";
    atacante = createSprite(200, 200, 10, 10);
    atacante.shapeColor = "white";
    tacoComputador = createSprite(200, 50, 50, 10);
    tacoComputador.shapeColor = "white";
}

function draw() {

    background(30);
    edges = createEdgeSprites();

    text(placarJogador, 260, 20);
    text(placarComputador, 120, 20);

    if (estadojogo === "start") {
        text("aperte espaço para começar", 60, 160);
    }
    else if (estadojogo === "fim") {
        text("game over", 200, 200)
        text("enter para reiniciar,50,90");
    } else {
        gameplay()


    }
    for (var i = 0; i < 400; i = i + 20) {
        stroke("yellow");
        line(i, 200, i + 10, 200);
    }
    //apertar espaço pra começar o jogo
    if (keyDown("space")) {
        atacante.velocityX = 4;
        atacante.velocityY = 3;
        estadojogo = "jogar"
    }

    drawSprites();
}
function gameplay() {
    atacante.bounceOff(tacoJogador);
    atacante.bounceOff(tacoComputador);
    atacante.bounceOff(edges);
    tacoComputador.bounceOff(edges);
    tacoJogador.bounceOff(edges);
    tacoComputador.x = atacante.x;

    //setas do jogador
    if (keyDown("left")) {
        tacoJogador.velocityX = -10;
    }

    if (keyDown("right")) {
        tacoJogador.velocityX = +10;
    }

    //reiniciar  

    if (placarComputador === 2 || placarJogador === 2) {
        estadojogo = "fim";
    }
    if (keyDown("r") && estadojogo === "fim")//nome da variável entre aspas não pode
        {
            estadojogo = "start";
            placarComputador = 0;
            placarJogador = 0;
        }

    //bola toca no gol volta no 200 200
    if (atacante.isTouching(gol1) || atacante.isTouching(gol2)) {
        if (atacante.isTouching(gol1)) {
            placarComputador = placarComputador + 1;
        }

        if (atacante.isTouching(gol2)) {
            placarJogador = placarJogador + 1;
        }

        atacante.x = 200;
        atacante.y = 200;
        atacante.velocityX = 0;
        atacante.velocityY = 0;
        tacoComputador.x = 200;
        tacoComputador.y = 50;
        tacoComputador.velocityX = 0;
        tacoComputador.velocityY = 0;
        estadojogo = "start";
    }

}


