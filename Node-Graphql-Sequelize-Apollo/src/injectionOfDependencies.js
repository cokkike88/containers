import { asClass, asFunction, asValue, createContainer} from 'awilix';
import app from './server/server';
import db from './db/models';
// Repositories
import { TransportationCompanyRepository } from './db/repositories/TransportationCompanyRepository';
// Core
import { TransportationCompanyCore } from './core/TransportationCompanyCore';
import { TestCore } from './core/TestCore';

const container = createContainer();

container.register({
    app: asValue(app),    
    db: asValue(db)
});
// Repositories
container.register({
    TransportationCompanyRepository: asClass(TransportationCompanyRepository).singleton()
});
// Core
container.register({
    TransportationCompanyCore: asClass(TransportationCompanyCore).singleton(),
    TestCore: asClass(TestCore).singleton()
})

export { container };