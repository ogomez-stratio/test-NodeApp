import mongoose from 'mongoose';
import seneca from 'seneca';

import { clinicsModel } from '../../domain'

const getClinicsByPostalCodeCommand = async (context, answer) => {
  try {
    const clinics = await clinicsModel.find({'nearbyPostalCodes': context.postalCode });
    answer(null, { result : clinics})
  } catch (exception) {
    answer(exception, null);
  }
}

export { getClinicsByPostalCodeCommand }