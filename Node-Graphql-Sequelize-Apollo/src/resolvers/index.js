import { merge } from 'lodash';
// Resolvers
import { companyResolver } from './catalogs/companyResolver';

export default merge(
    companyResolver
);