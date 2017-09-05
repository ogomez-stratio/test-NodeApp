#Introduction
This microservice is related to Sanitas.DentalBot project.
This service is in charge managing the information of some clinics when a user requests some information about it.

## Related tech
- Yarn: package manager
- Seneca: microservice toolkit for node.js
- Node.js (v. 7.0 or newer)
- Eslint
- Testing using mocha, chai and sinon
- Babel for transpiling
- MongoDB as database.
- Mongoose as DB accessing tooling.

# Running the microservice
* Clone the microservice repository from: https://plainconcepts.visualstudio.com/DefaultCollection/SanitasDental.Bot/_git/SanitasDental.Bot.ClinicsService
* Go to the project root folder and type `yarn install` in order to download all necessary dependencies.
* The following commands are built in:
  - `yarn start:prod`: Run the microservice in a production ready fashion.
  - `yarn lint`: Execute the linter using the rules set in `.eslintrc` file that is located in the project root folder
  - `yarn test`: Execute all unit / integration tests.
  - `yarn test:watch`: Execute unit / integration tests with a watcher. Useful during development to re-run all tests when a file is saved.
  - `yarn build`: Create a production ready package into build directory using the configuration params defined. This package is ready to be deployed in your desired enviroment
  - `yarn seed`: Seed the related database using the .json files located

# Services offered

| Service name                    | Command                           | Arguments                         | Returns                   |
| ------------------------------ :|-------------------------------- : | -------------------------------- :| ------------------------ :|
| getAllClinics                   | `getAllClinics`                   | -                                 |  Array clinic Model       |
| getClinicByEntity               | `getClinicByEntity `              | Clinic Name (string)              |  Clinic Model             |
| getClinicByPostalCode           | `getClinicByPostalCode`           | Clinic Postal Code (string)       |  Array clinic Model       |
| getClinicByProvince             | `getClinicByProvince `            | Clinic Province (string)          |  Array clinic Model       |
| getUrgencyScheduleByEntity      | `getUrgencyScheduleByEntity`      | Clinic Name (string)              |  Clinic Model             |
| getUrgencyScheduleByPostalCode  | `getUrgencyScheduleByPostalCode`  | Clinic Postal Code (string)       |  Array clinic Model       |


## Calling services from main project

- For example getAllClinics service:

```javascript
import seneca from 'seneca';
import senecaPromise from 'seneca-as-promised';

const senecaContext = seneca({ log: 'silent' })
                     .client({ host: 'localhost', port: 9003 })
                     .use(senecaPromise);

const getAllClinicsPattern = { service: 'clinics', command: 'getAllClinics'};

senecaContext.actAsync(Object.assign({}, getAllClinicsPattern))
             .then(response => console.log(response.result));
```
* Considerations:
  - Import or require seneca and seneca-as-promised libraries. The second one is used to make seneca promises ready.
  - Build a seneca context client setting seneca-as-promised.
  - Define the pattern of the service you want to call to. In this case, we are using the clinics service (we have to set the string treatments in the service property) and de command getAllClinics.
  - Make the request to the microservice using the method actAsync from the senecaContext previously created.
  - When the promise resolves the returned object can be found in result property of the returned response.

## Calling services from external tools
* Seneca is a wrapper of a node.js server making easier the development of a microservice. So, you can still call the services without using a seneca client in a parent project.
* For example, it is possible calling the microservice using postman or the curl command as follows (assuming the service is running in localhost and listening to port 10101):

`curl –d '{"service" : "clinics", "command": "getAllClinics"}' http://localhost:9003/act`