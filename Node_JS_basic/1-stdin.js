// Set the encoding for the standard input to UTF-8
process.stdin.setEncoding('utf8');

// Prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Listen for data input from the user
process.stdin.on('data', (data) => {
  // Trim the input to remove any extra whitespace
  const name = data.toString().trim();
  // Display the user's name
  console.log(`Your name is: ${name}`);
  // Inform the user that the software is closing
  console.log('This important software is now closing');
  // End the input stream
  process.stdin.end();
});
