import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const inputFilePath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\zip\\files\\archive.gz';
    const outputFilePath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\zip\\files\\fileToDeCompress.txt';

    const readStream = fs.createReadStream(inputFilePath);

    const writeStream = fs.createWriteStream(outputFilePath);

    const gunzipStream = zlib.createGunzip();

    readStream.pipe(gunzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Decompression completed.');
    });

    readStream.on('error', (error) => {
        console.error('Error reading file:', error);
    });

    writeStream.on('error', (error) => {
        console.error('Error writing file:', error);
    });
};

await decompress();