import config from './config';
import app from './server/server';
import routes from './controllers/routes';

app.use(routes);

app.listen(config.port, () => {
    console.log(`Server run on port ${config.port}`);
})