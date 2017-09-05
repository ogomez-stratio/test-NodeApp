import seeder from 'mongoose-seeder';
import mongoose from 'mongoose';

import {} from '../../domain';
import { configuration } from '../../../config'

import seedData from './seed.data.json';

const { name, host, port, user, password, userRootDatabase } = configuration.database;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${user && password ? `${user}:${password}@` : ''}${host}:${port}/${name}`, { auth: { authdb: userRootDatabase } });

const seedError = (error) => {
    mongoose.connection.close();
    console.log(`Seed finished with errors: ${error}`);
    process.exit(1); //eslint-disable-line
}

seeder.seed(seedData, { dropDatabase: false }).then(() => {
  mongoose.connection.close();
  console.log('Seed finished OK!');
  process.exit(0); //eslint-disable-line
}).catch((error) => seedError(error));
