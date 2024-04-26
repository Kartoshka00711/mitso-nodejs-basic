import { promises as fsPromises, constants } from 'fs';
import path from 'path';

const read = async () => {
    const filesFolderPath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\fs\\files';
    const fileToReadName = 'fileToRead.txt';
    const filePath = path.join(filesFolderPath, fileToReadName);

    try {
        await fsPromises.access(filePath, constants.F_OK);

        const fileContents = await fsPromises.readFile(filePath, 'utf-8');


        console.log('File contents:');
        console.log(fileContents);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: File does not exist');
        } else {
            throw error;
        }
    }
};

await read();