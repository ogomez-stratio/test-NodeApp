export const descriptor = {
  serviceName: 'clinics',
  getAllClinics : { command: 'getAllClinics' },
  getClinicsByPostalCode: { command: 'getClinicsByPostalCode' },
  getClinicsByProvince: { command: 'getClinicsByProvince' },
  getClinicByEntity: { command: 'getClinicByEntity' },
  getUrgencyScheduleByEntity: { command: 'getUrgencyScheduleByEntity' },
  getUrgencySheduleByPostalCode: { command: 'getUrgencySheduleByPostalCode' }
}