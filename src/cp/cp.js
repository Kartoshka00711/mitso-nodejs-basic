import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn('node', ['src\\cp\\files\\script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

        process.stdin.pipe(childProcess.stdin);
        childProcess.stdout.pipe(process.stdout);

        childProcess.on('exit', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Child process exited with code ${code}`));
            }
        });

        childProcess.on('error', (error) => {
            reject(error);
        });
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2' , 'someArgument1','someArgument1','someArgument1',]);
