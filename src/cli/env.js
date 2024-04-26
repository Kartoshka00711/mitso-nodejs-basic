const parseEnv = () => {
    console.log('MITSO environment variables:');
    for (const key in process.env) {
        if (key.startsWith('MITSO_')) {
            console.log(`MITSO_${key}=${process.env[key]}`);
        }
    } 
};

parseEnv();