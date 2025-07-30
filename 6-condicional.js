// Dados iniciais
let vida = 60;       // de 0 a 100
let energia = 40;    // de 0 a 100
let xp = 800;        // experiência acumulada
let ouro = 200;      // moedas
let nivel = 3;       // nível atual

// Parte 1 – Estado de Saúde
if (vida >= 80) {
  console.log("🟢 Ayla está em ótima forma!");
} else if (vida >= 40) {
  console.log("🟡 Ayla está ferida, mas ainda pode lutar.");
} else {
  console.log("🔴 Ayla está em estado crítico!");
}

// Parte 2 – Preparação para a Missão
if (vida >= 50 && energia >= 50) {
  console.log("✅ Ayla entra no calabouço com confiança.");
} else {
  console.log("❌ Ayla precisa descansar antes de seguir.");
}

// Parte 3 – Subida de Nível
if (xp >= 1000) {
  nivel += 1;
  console.log(`🎉 Ayla subiu para o nível ${nivel}!`);
} else {
  console.log("📈 Continue lutando para subir de nível.");
}

// Parte 4 – Compra no Mercado
if (ouro >= 300) {
  console.log("🛡️ Ayla comprou a armadura mágica!");
} else {
  console.log("💰 Ayla não tem ouro suficiente.");
}
