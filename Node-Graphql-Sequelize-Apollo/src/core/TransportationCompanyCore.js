import { get as getRepository } from '../db/repositories/TransportationCompanyRepository';

let get = (id) => {
    return getRepository(id);
}

export { get }