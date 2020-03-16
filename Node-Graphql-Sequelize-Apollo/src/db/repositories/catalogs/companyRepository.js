import db from '../../models';

let get = (id) => {
    return db.Company.findOne({where: {id}});
}

let create = (entity) => {
    return new Promise((resolve, reject) => {
        console.log('entity', entity);
        db.Company.create(entity)
        .then(result => {
            return resolve({
                type: 'success',
                message: 'compañia creada exitosamente'
            });
        })
        .catch(error => {
            return reject('Error al crear la compañia', error);
        })
    });
}

let update = (entity, id) => {
    return new Promise((resolve, reject) => {
        db.Company.update({
            entity
        }, {
            where: {
                id
            }
        }).then(result => {
            console.log('result', result);
            return resolve({
                type: 'success',
                message: 'compañia modificada exitosamente'
            });
        })
        .catch(error => {
            return reject('Error al modificar la compañia', error);
        })
    })
}

export { 
    get,
    create,
    update 
};