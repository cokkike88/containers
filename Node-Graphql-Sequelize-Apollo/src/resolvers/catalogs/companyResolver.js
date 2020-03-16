import { get, create, update } from '../../core/catalogs/companyCore';

export const companyResolver = {
    Query: {
        getCompany: (root, {entity, id}) => {
            return get(id);
        }
    },
    Mutation: {
        createCompany: (root, {entity}) => {
            console.log('entity resolve', entity);
            return create(entity);
            // return new Promise((resolve, reject) => {
            //     console.log('entity resolve', entity);
            //     create(entity)
            //     .then(result => {
            //         return resolve(result);
            //     })
            //     .catch(error => {
            //         return reject(error);
            //     })
            // })
        },
        updateCompany: (root, {entity, id}) => {
            return update(entity, id);
        }
    }
}