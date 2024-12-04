const botaoIniciar = document.getElementById("iniciar");
const cenario = document.getElementById("cenario");
const nave = document.getElementById("nave");
const pontos= document.getElementById("pontos");
const audioJogo = new Audio ("")

const larguraCenario = cenario.offsetWidth;
const alturaCenario = cenario.offsetHeight;

const larguraNave = nave.offsetWidth;
const alturaCeNave = nave.offsetHeight;


const velocidadeNave = 15;
const velocidadeTiro = 20;
const velocidadeNaveInimigas = 6;

let estaAtirando = false;

let tiroAtual = 0;

let vidaAtual = 100;
let pontosAtual = 0;

let checaMoveNaveInimigas;
let checaMoveInimigas;
let checaMoveTiros;