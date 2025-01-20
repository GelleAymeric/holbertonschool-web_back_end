// Set the encoding for the standard input to UTF-8
process.stdin.setEncoding('utf8');

// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data input from the user
process.stdin.on('readable', () => {
  // Read the input from the user
  const name = process.stdin.read();
  // Display the user's name
  process.stdout.write(`Your name is: ${name}`);
  // Inform the user that the software is closing
  process.stdout.write('This important software is now closing\n');
  // Exit the Node.js process
  process.exit();
});
