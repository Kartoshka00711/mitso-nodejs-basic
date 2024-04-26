import path from 'path';
import { promises as fsPromises, constants } from 'fs';

const create = async () => {
    const filesFolderPath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\fs\\files';
    const filePath = path.join(filesFolderPath, 'fresh.txt');

    try {
        await fsPromises.access(filePath, constants.F_OK);
        throw new Error('FS operation failed: File already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fsPromises.writeFile(filePath, 'I am fresh and young');
            console.log('File created successfully');
        } else {
            throw error;
        }
    }
};

await create();