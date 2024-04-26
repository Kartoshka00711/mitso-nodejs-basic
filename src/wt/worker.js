import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => {
    if (n < 2) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const sendResult = () => {
    try {
        const result = nthFibonacci(workerData);
        if (parentPort) {
            parentPort.postMessage({ status: 'resolved', data: result });
        }
    } catch (error) {
        if (parentPort) {
            parentPort.postMessage({ status: 'error', data: null });
        }
    }
};

sendResult();