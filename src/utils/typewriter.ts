export const type = async (
  text: string,
  onUpdate: (text: string) => void,
  speed = 50
): Promise<void> => {
  let current = '';
  
  for (let char of text) {
    current += char;
    onUpdate(current);
    await new Promise(resolve => setTimeout(resolve, speed + Math.random() * 50));
  }
  
  return Promise.resolve();
};