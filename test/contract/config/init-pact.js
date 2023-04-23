import { Pact } from '@pact-foundation/pact';
import path from 'path';

const consumerName = 'CatShelterFront';
const providerName = 'CatShelterBack';

export const provider = new Pact({
    consumer: consumerName,
    provider: providerName,
    port: 8080,
    cors: true,
    log: path.resolve(process.cwd(), './test/contract/logs', `${consumerName}-${providerName}.log`),
    dir: path.resolve(process.cwd(), './test/contract/pacts')
});