import { importSchema } from 'graphql-import';
import { mergeTypes } from 'merge-graphql-schemas';
import config from '../config';

console.log(config.rootDirectory+'/schemas/schema.graphql');
const schemas = importSchema('src/schemas/schema.graphql');
const types = [
    schemas    
];

const typeDefs = mergeTypes(types);
export { typeDefs };
