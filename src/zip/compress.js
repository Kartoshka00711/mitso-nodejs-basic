import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const inputFilePath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\zip\\files\\fileToCompress.txt';
    const outputFilePath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\zip\\files\\archive.gz';

    const readStream = fs.createReadStream(inputFilePath);

    const writeStream = fs.createWriteStream(outputFilePath);

    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Compression completed.');
    });

    readStream.on('error', (error) => {
        console.error('Error reading file:', error);
    });

    writeStream.on('error', (error) => {
        console.error('Error writing file:', error);
    });
};

await compress();