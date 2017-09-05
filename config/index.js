import merge from 'lodash/merge';
import defaultConfig from './default';
import environmentConfig from './environment';
const environment = process.env.NODE_ENV;
let productionConfig = {};
if (environment && environment.trim() === 'production'){
  productionConfig = require(`./${environment.trim()}.js`).default;
}
export const configuration = merge(defaultConfig, productionConfig, environmentConfig);
