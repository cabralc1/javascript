function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura ;
	this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){ 
    	ctx.drawImage(img, this.x, this.y, this.altura, this.largura, 
    	xCanvas, yCanvas, this.largura, this.altura);    
    } 
}

var bg = new Sprite(0, 0, 600, 600),
    spriteBoneco = new Sprite(618,16, 87,87),
   
   perdeu = new Sprite(603, 320, 530, 420),
	jogar = new Sprite(603, 105, 370, 420),
	novo = new Sprite(68, 721, 287, 480),
	spriteRecord = new Sprite(28, 879, 455, 420),
	spriteChao = new Sprite(0, 604, 600, 600);


