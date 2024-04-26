import { promises as fsPromises, constants } from 'fs';
import path from 'path';

const rename = async () => {
    const filesFolderPath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\fs\\files';
    const wrongFileName = 'wrongFilename.txt';
    const properFileName = 'properFilename.md';
    const wrongFilePath = path.join(filesFolderPath, wrongFileName);
    const properFilePath = path.join(filesFolderPath, properFileName);

    try {
        await fsPromises.access(wrongFilePath, constants.F_OK);
        await fsPromises.access(properFilePath, constants.F_OK);
        throw new Error('FS operation failed: File already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            if (error.path === wrongFilePath || error.path === properFilePath) {
                await fsPromises.rename(wrongFilePath, properFilePath);
                console.log('File renamed successfully');
            }
        } else {
            throw error;
        }
    } 
};

await rename();