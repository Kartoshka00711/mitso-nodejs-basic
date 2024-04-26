import { promises as fsPromises, constants } from 'fs';

const list = async () => {
    const filesFolderPath = 'C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\fs\\files';

    try {
        await fsPromises.access(filesFolderPath, constants.F_OK);

        const files = await fsPromises.readdir(filesFolderPath);

        console.log('Files in directory:');
        files.forEach(file => {
            console.log(file);
        });
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: Directory does not exist');
        } else {
            throw error;
        }
    }
};

await list();