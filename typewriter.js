const sentence = 'hello there from lighthouse labs \n';

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000 * char)
// }

for (let i = 0; i < sentence.length; i++) { //change the loop type
    setTimeout(() => {
      process.stdout.write(sentence[i]); //appear on the same line in terminal
    }, 50 * i); //5s for each of the characters
};


