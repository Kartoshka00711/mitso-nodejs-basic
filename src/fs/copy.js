import { promises as fsPromises, constants } from 'fs';
import path from 'path';

const copy = async () => {
    const filesFolderPath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\fs\\files';
    const filesCopyFolderPath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\fs\\files_copy';

    try {       
        await fsPromises.access(filesFolderPath, constants.F_OK);
        await fsPromises.access(filesCopyFolderPath, constants.F_OK);
        throw new Error('FS operation failed: Directory already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            if (error.path === filesFolderPath || error.path === filesCopyFolderPath) {
                await fsPromises.mkdir(filesCopyFolderPath);
                const files = await fsPromises.readdir(filesFolderPath);
                for (const file of files) {
                    const sourceFilePath = path.join(filesFolderPath, file);
                    const destFilePath = path.join(filesCopyFolderPath, file);
                    await fsPromises.copyFile(sourceFilePath, destFilePath);
                    console.log(`File ${file} copied successfully`);
                }
                console.log('All files copied successfully');
            }
        } else {
            throw error;
        }
    } 
};

await copy();
