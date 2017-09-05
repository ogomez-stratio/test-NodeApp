import seneca from 'seneca';
import actions from './actions';
import { configuration } from '../config';
import {} from './database';

const senecaContext = seneca({ log: 'silent' });

senecaContext.use(actions, { senecaContext })
             .listen(configuration.service);
