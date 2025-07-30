let nome = "Ayla";
let nivel = 1;
let xp = 0;
let ouro = 50;
let vida = 100;

console.log("🌟 Início da Jornada de " + nome);
console.log(`Nível: ${nivel}, XP: ${xp}, Ouro: ${ouro}, Vida: ${vida}\n`);

// ⚔️ Eventos da Missão
xp += 20;       // Ganhou 20 de XP
ouro += 100;    // Achou 100 de ouro
vida -= 30;     // Perdeu 30 de vida
ouro *= 2;      // Dobrou o ouro
nivel++;        // Subiu de nível
vida /= 2;      // Recuperou metade da vida restante

// 🧾 Resultado Final
console.log("🧾 Relatório Final da Jornada:");
console.log(`🎖️ Herói: ${nome}`);
console.log(`📈 Nível: ${nivel}`);
console.log(`⭐ XP: ${xp}`);
console.log(`💰 Ouro: ${ouro}`);
console.log(`❤️ Vida: ${vida}`);
