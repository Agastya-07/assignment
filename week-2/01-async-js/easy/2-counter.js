let count = 0;

function updateCounter() {
  count++;
  console.log(count);
  setTimeout(updateCounter, 1000); // Update the counter every 1 second (1000 milliseconds)
}

updateCounter(); // Start the counter
    