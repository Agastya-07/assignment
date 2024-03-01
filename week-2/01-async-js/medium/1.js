const fs = require('fs');

fs.readFile('bxb.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(/\s+/g, ' ').trim();

  fs.writeFile('bxb.txt', updatedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File updated successfully');
  });
});
