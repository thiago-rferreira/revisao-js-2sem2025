const NOME_ARMA = "Espada do Trovão";
const DANO_BASE = 100;
const RAREZA = "Lendária";
const ELEMENTO = "Raio";

console.log(`⚔️ Arma: ${NOME_ARMA}`);
console.log(`💥 Dano Base: ${DANO_BASE}`);
console.log(`✨ Raridade: ${RAREZA}`);
console.log(`🌩️ Elemento: ${ELEMENTO}`);

// Tentativa de alteração (vai gerar erro!)
DANO_BASE = 120; // ❌ Isso vai dar erro porque é uma constante
//TypeError: Assignment to constant variable.