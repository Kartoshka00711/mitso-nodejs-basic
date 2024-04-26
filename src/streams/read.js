import fs from 'fs';

const read = async () => {
    const filePath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\streams\\files\\fileToRead.txt';

    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        console.log('\nFile reading completed.');
    });

    readStream.on('error', (error) => {
        console.error('Error reading file:', error);
    });
};

await read();