const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');   // original file
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), data)  // unlink = delete 

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)    //rewrite new file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice mga boss')  // append new file 
        await fsPromises.rename(path.join(__dirname, 'files', 'PromiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))  //rename the new file 

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData)

    } catch (err){
        console.error(err)
    }
}
fileOps();



//USING (path.join) to locate file location 
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

/*
// CAN ADD TXT USING writeFile 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello mga GAR', (err, data) => {
    if (err) throw err;
    console.log('Write Complete');
    //appendfile
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err, data) => {
        if (err) throw err;
        console.log('Append Complete');
        // rename only the changes
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err, data) => {
            if (err) throw err;
            console.log('Rename Complete');
        })
    })
})         //--CALLBACK HELL----------------
*/

//exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// })
