// making a directory 
const fs = require('fs');

// checking to see if it exists before creating the folder
if(!fs.existsSync('./new')) { 
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('directory created')
    })
}

// if it does exist then remove
if(fs.existsSync('./new')) { 
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('directory removed')
    })
}


