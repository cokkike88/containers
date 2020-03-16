import { 
    get as getRepository, 
    create as createRepository,
    update as updateRepository } from '../../db/repositories/catalogs/companyRepository';

let get = (id) => {
    return getRepository(id);
}

let create = (entity) => {
    return new Promise((resolve, reject) => {
        console.log('core entity', entity);
        createRepository(entity)
        .then(result => {
            return resolve(result);
        })
        .catch(error => {
            return reject(error);
        })
    })
}

let update = (entity, id) => {
    return new Promise((resolve, reject) => {
        updateRepository(entity, id)
        .then(result => {
            return resolve(result);
        })
        .catch(error => {
            return reject(error);
        })
    })
}

export { 
    get,
    create,
    update 
}