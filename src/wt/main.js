import { Worker, isMainThread } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    if (isMainThread) {
        const cpuCount = cpus().length;
        const results = [];

        const workers = Array.from({ length: cpuCount }, (_, index) => {
            const worker = new Worker('C:\\Users\\karto\\Documents\\GitHub\\mitso-nodejs-basic\\src\\wt\\worker.js', { workerData: index + 10 });

            worker.on('message', (message) => {
                results.push(message);
                if (results.length === cpuCount) {
                    console.log(results);
                }
            });

            worker.on('error', (error) => {
                results.push({ status: 'error', data: null });
                if (results.length === cpuCount) {
                    console.log(results);
                }
            });

            return worker;
        });

        await Promise.all(workers.map(worker => new Promise(resolve => worker.on('exit', resolve))));
    }
};

await performCalculations();