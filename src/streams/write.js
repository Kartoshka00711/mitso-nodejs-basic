import fs from 'fs';

const write = async () => {
    const filePath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\streams\\files\\fileToWrite.txt';

    const writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8' });

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    
    writeStream.write('How die?\n');

        process.stdin.on('end', () => {
            writeStream.end();
        console.log('Data writing completed.');
    });

        writeStream.on('error', (error) => {
        console.error('Error writing data:', error);
    }); 
};

await write();