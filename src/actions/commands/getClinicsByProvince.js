import mongoose from 'mongoose';
import seneca from 'seneca';

import { clinicsModel } from '../../domain'

const getClinicsByProvinceCommand = async (context, answer) => {
  try {
    const clinics = await clinicsModel.find({'province.id': context.province });
    answer(null, { result : clinics})
  } catch (exception) {
    answer(exception, null);
  }
}

export { getClinicsByProvinceCommand }
