// dir == DIRECTORY
// I used (node dir) 
// mkdir = (to make new directory)
// rmdir = (to remove directory)

 //-------------------------------- PROCESS OF MAKING DIRECTORY

const fs = require('fs');                               
if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    })
    
}
 //-------------------------------- PROCESS OF MAKING DIRECTORY
// const fs = require('fs');                                    
// fs.mkdir('./new', (err) => {
//     if (err) throw err;
//     console.log('Directory created')
// })



if(fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed')
    })
    
}