const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function makegreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];

  for (let magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }
  return greatMagicians;
}

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

console.log(makegreat(magicians))
