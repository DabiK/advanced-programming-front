export const getFileName = () => {
    console.warn(`env '${process.env.ENV}'`);
    switch (process.env.ENV) {
        case 'local':
            console.warn('using local env file');
            return '.env.local';
        case 'dev':
            console.warn('using local env file');
            return '.env.dev';
        case 'prod':
            console.warn('using prod env file');
            return '.env';
        case 'test':
            console.warn('using local env file');
            return '.env.test';
        default:
            console.warn('using local env file');
            return '.env.local';
    }
};
