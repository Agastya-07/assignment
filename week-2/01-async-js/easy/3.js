const { error } = require('console');
var fs = require('fs');



fs.readFile('./bxb.txt','utf8', (err,data)=>{
    
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    
})
for(var i=0;i<1000000;i++){
    console.log(i);
}

