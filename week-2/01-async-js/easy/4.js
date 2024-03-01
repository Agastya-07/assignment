const fs = require('fs');

const content = "This is the content to be written to the file.";

fs.writeFile('bxb.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});
for(var i=0;i<10000;i++){
    console.log(i);
}
