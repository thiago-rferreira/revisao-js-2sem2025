let temChaveDeFerro = true;
let temMapa = false;
let nivel = 7;
let vida = 45;

// 1. Caverna das Sombras → precisa da chave E do mapa
let podeEntrarCaverna = temChaveDeFerro && temMapa;
console.log("Pode entrar na Caverna das Sombras?", podeEntrarCaverna); // false

// 2. Templo do Dragão → nível >= 5 OU tem a chave
let podeEntrarTemplo = nivel >= 5 || temChaveDeFerro;
console.log("Pode entrar no Templo do Dragão?", podeEntrarTemplo); // true

// 3. Bosque da Recuperação → vida < 50 E NÃO tem o mapa
let podeEntrarBosque = vida < 50 && !temMapa;
console.log("Pode entrar no Bosque da Recuperação?", podeEntrarBosque); // true
