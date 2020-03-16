import {localhost} from './localhost';
import {production} from './production';
import {development} from './development';

let config = {};

// console.log('NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'localhost'){
    // console.log('PORCCES LOCALHOST', localhost);
    config = localhost;
}
else if (process.env.NODE_ENV === 'production'){
    // console.log('PORCCES production', production);
    config = production;
}
else if (process.env.NODE_ENV === 'development'){
    // console.log('PORCCES development', development);
    config = development;
}


export default config;