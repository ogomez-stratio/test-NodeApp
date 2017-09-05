import mongoose from 'mongoose';
import { configuration } from '../../config'

const { name, host, port, user, password, userRootDatabase } = configuration.database;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${user && password ? `${user}:${password}@` : ''}${host}:${port}/${name}`, { auth: { authdb: userRootDatabase } });
