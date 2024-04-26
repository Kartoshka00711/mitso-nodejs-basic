import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import { promises as fsPromises } from 'fs';
import * as cjsC from './files/c.js';

const currentModuleDir = path.dirname(new URL(import.meta.url).pathname);

export const random = Math.random();

let unknownObject;

if (random > 0.5) {
    const filePath = path.join('C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\modules\\files\\a.json');
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    unknownObject = JSON.parse(fileContent);
} else {
    const filePath = path.join('\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\modules\\files\\b.json');
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    unknownObject = JSON.parse(fileContent);
}


console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };

