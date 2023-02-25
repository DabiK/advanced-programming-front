export const getFileName = () => {
    switch (process.env.ENV) {
        case 'local':
            console.warn('using local env file');
            return '.env.local';
        case 'dev':
            console.warn('using local env file');
            return '.env.dev';
        case 'prod':
            console.warn('using local env file');
            return '.env.prod';
        case 'test':
            console.warn('using local env file');
            return '.env.test';
        default:
            console.warn('using local env file');
            return '.env.local';
    }
};
