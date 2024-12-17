const alienPhrases = [
  "SECTOR-7G BREACH DETECTED",
  "DIMENSIONAL RIFT EXPANDING",
  "VOID ENTITIES APPROACHING",
  "REALITY CORRUPTION: 78%",
  "QUANTUM ANOMALY DETECTED",
  "TIME DILATION WARNING",
  "CONSCIOUSNESS TRANSFER IN PROGRESS",
  "DARK MATTER SURGE IMMINENT",
  "INTERDIMENSIONAL SIGNAL DETECTED",
  "VOID WHISPERS INTENSIFYING",
  "REALITY ANCHOR FAILING",
  "COSMIC HORROR PROXIMITY ALERT",
  "ELDER BEING AWAKENING",
  "SANITY LEVELS CRITICAL",
  "NIGHTMARE FREQUENCY ACTIVE",
  "FORBIDDEN KNOWLEDGE DETECTED",
  "REALITY FABRIC TEARING",
  "COSMIC ENTITY APPROACHING",
  "VOID RESONANCE PEAK",
  "EXISTENCE ERROR DETECTED"
];

const alienSymbols = ['Ꙭ', 'ꙮ', '⊗', '⊕', '◊', '∆', '◈', '▣', '◭', '⧫'];

export function generateAlienMessage(): string {
  const basePhrase = alienPhrases[Math.floor(Math.random() * alienPhrases.length)];
  const symbol = alienSymbols[Math.floor(Math.random() * alienSymbols.length)];
  const timestamp = new Date().toISOString().replace(/[:-]/g, '');
  
  return `${symbol} ${basePhrase} [${timestamp}] ${symbol}`;
}