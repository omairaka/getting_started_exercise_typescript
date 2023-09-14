var ar: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 1; i <= 9; i++) {
  var ordinalEnding: string;

  if (i === 1) {
    ordinalEnding = "st";
  } else if (i === 2) {
    ordinalEnding = "nd";
  } else if (i === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${i}${ordinalEnding}`);
}
