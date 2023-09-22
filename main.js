//Pega o ID canvas no HTML
let canvas = document.getElementById("canvas");

//Pegamos o contexto do desenho, esse é o método que retorna o tipo da animação, usar o parâmetro "2d" significa que o objeto que será renderizado será bidimensional
let contexto = canvas.getContext("2d");

//variável que vai identificar se estamos desenhando 
let desenhando = false;

canvas.addEventListener("mousedown", function(event){
    //vamos usar o método addEventListener para ouvir nosso mouse, ele irá identificar quando clicarmos 
    desenhando = true;
    contexto.beginPath();
    // a variável contexto junto com o método beginPath() indica que algo novo será criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    //nesse método, vamos dizer como o contexto irá funcionar, o clientX vai fornecer as cordenadas horizontais do mouse e o offsetLeft irá converter esse valor em pixel (px), a mesma coisa acontece com o clientY na vertical.
})

canvas.addEventListener("mousemove", function(event){
    //função que identifica quando movemos o mouse 
    if (desenhando) {
        //esse if vai identificar se estamos clicando enquanto movemos o mouse 
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
        //o lineTo vai juntar as cordenadas e identificar a linha que estamos traçando enquanto clicamos e movemos o mouse 
        contexto.stroke();
        //traça a linha
    }
})

canvas.addEventListener("mouseup", function (event){
    //essa função identifica quando não estamos mais clicando no mouse
    desenhando = false;
})

//pegamos o input da paleta de cor do HTML
let corInput = document.getElementById("cor");

// Define a cor inicial do contexto de desenho
contexto.strokeStyle = corInput.value;

// adiciona um ouvinte de evento para o evento de alteração de cor
corInput.addEventListener("change", function() {
    // atualiza a cor do contexto de desenho quando o usuário escolhe uma nova cor
    contexto.strokeStyle = corInput.value;
});

let espessuraInput = document.getElementById("espessura");

// Define a espessura inicial do pincel
contexto.lineWidth = espessuraInput.value;

// Adiciona um ouvinte de evento para o evento de alteração de espessura
espessuraInput.addEventListener("input", function() {
    // Atualiza a espessura do pincel quando o usuário ajusta a barra deslizante
    contexto.lineWidth = espessuraInput.value;
});













