const args = Number(process.argv[2]);

if (typeof args !== 'number') {
  console.log('wrong args');
}
else {
  sol(args);
}

function sol(number) {
  for (let i = 0; i < number; i++) {
    const string = `${' '.repeat(number - (i + 1))}${'*'.repeat(2 * (i + 1) - 1)}${' '.repeat(number - (i + 1))}`;
    console.log(string);
  }
}
