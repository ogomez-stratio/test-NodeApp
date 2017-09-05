import mongoose from 'mongoose';
import seneca from 'seneca';

import { clinicsModel } from '../../domain'

const getClinicByEntityCommand = async (context, answer) => {
  try {
    const clinics = await clinicsModel.findOne({'entity' : context.entity});
    answer(null, { result : clinics})
  } catch (exception) {
    answer(exception, null);
  }
}

export { getClinicByEntityCommand }