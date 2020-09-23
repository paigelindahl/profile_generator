const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.question('What is your name? ', (answer) => {
    rl.question(`What's an activity you like doing?`, (answer) => {
      rl.question(`What do you listen to while doing that?`, (answer) => {
        rl.question(`What meal is your favourite?`, (answer) => {
          rl.question(`What sport is your favourite`, (answer) => {
            rl.question(`What is your superpower?`, (answer) => {
            console.log(`Thank you for your valuable feedback`);
    rl.close();
            });
          });
        });
      });
    });
  });
});
