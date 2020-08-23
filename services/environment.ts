export const env : { production: boolean} = {
    production: !__DEV__
};

const ENV = {
    dev: {
        apiUrl: 'http://xxxxx',
        apiKey: 'b9387200-ba4b-48f9-98d6-xxxxxx',
    },
    prod: {
        apiUrl: 'https://yyyyy',
        apiKey: 'b9387200-ba4b-48f9-98d6-yyyyyy',
    }
};

const getEnvVars = () => {
    console.log('env dev', !env.production);
    return env.production ? ENV.prod : ENV.dev;
};
export default getEnvVars;
