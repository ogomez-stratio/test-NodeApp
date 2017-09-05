import { getAllClinicsCommand } from './commands/getAllClinics';
import { getClinicsByPostalCodeCommand } from './commands/getClinicsByPostalCode';
import { getClinicsByProvinceCommand } from './commands/getClinicsByProvince';
import { getClinicByEntityCommand } from './commands/getClinicByEntity';
import { getUrgencyScheduleByEntityCommand } from './commands/getUrgencyScheduleByEntity';
import { getUrgencySheduleByPostalCodeCommand } from './commands/getUrgencySheduleByPostalCode';
import { descriptor } from '../serviceDescriptor';

const senecaActions = ({ senecaContext }) => {
  senecaContext.add(`service: ${descriptor.serviceName}, command: ${descriptor.getAllClinics.command}`,
                    getAllClinicsCommand);
  senecaContext.add(`service: ${descriptor.serviceName}, command: ${descriptor.getClinicsByPostalCode.command}`,
                    getClinicsByPostalCodeCommand);
  senecaContext.add(`service: ${descriptor.serviceName}, command: ${descriptor.getClinicsByProvince.command}`,
                    getClinicsByProvinceCommand);
  senecaContext.add(`service: ${descriptor.serviceName}, command: ${descriptor.getClinicByEntity.command}`,
                    getClinicByEntityCommand);
  senecaContext.add(`service: ${descriptor.serviceName}, command: ${descriptor.getUrgencyScheduleByEntity.command}`,
                    getUrgencyScheduleByEntityCommand);
  senecaContext.add(`service: ${descriptor.serviceName}, command: ${descriptor.getUrgencySheduleByPostalCode.command}`,
                    getUrgencySheduleByPostalCodeCommand);
};

export default senecaActions;