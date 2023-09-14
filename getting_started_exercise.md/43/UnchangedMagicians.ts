var magicianss: string[] = ["Nana PAtekar", "Bombal", "Salman", "Caller"];

function make_great(magicianss: string[]): string[] {
  const greatMagicians: string[] = [];

  for (let magician of magicianss) {
    greatMagicians.push(`${magician} the Great`);
  }

  return greatMagicians;
}

function showMagicians(magicianss: string[]): void {
  for (let magician of magicianss) {
    console.log(magician);
  }
}

const originalMagicians = [...magicianss];
const greatMagicians = make_great([...magicianss]);

console.log("Original Magicians:");
showMagicians(originalMagicians);

console.log("Great Magicians:");
showMagicians(greatMagicians);