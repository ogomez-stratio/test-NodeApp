import mongoose from 'mongoose';
import seneca from 'seneca';

import { clinicsModel } from '../../domain'

const getUrgencySheduleByPostalCodeCommand = async (context, answer) => {
  try {
    const clinics = await clinicsModel.find({'nearbyPostalCodes': context.postalCode }, 'entity name emergencySchedule');
    answer(null, { result : clinics})
  } catch (exception) {
    answer(exception, null);
  }
}

export { getUrgencySheduleByPostalCodeCommand }