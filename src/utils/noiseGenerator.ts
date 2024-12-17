export function generateNoise(): string[] {
  const patterns = [
    '01', '10', '00', '11',
    'HELP', 'ERROR', 'SIGNAL LOST', 'CONNECTING',
    '████', '▓▓▓▓', '░░░░', '____'
  ];

  return Array(8).fill(0).map(() => {
    const lineLength = Math.floor(Math.random() * 30) + 20;
    let line = '';
    
    for (let i = 0; i < lineLength; i++) {
      if (Math.random() > 0.95) {
        // Occasionally insert a pattern
        line += patterns[Math.floor(Math.random() * patterns.length)];
        i += 3; // Skip a few characters to account for pattern length
      } else {
        line += Math.random() > 0.5 ? '1' : '0';
      }
    }
    
    return line;
  });
}