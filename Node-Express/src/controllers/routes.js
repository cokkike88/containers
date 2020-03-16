import app from '../server/server';
import testController from '../controllers/testController';

app.use('/test', testController);