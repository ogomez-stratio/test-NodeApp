import mongoose from 'mongoose';
import seneca from 'seneca';

import { clinicsModel } from '../../domain'

const getAllClinicsCommand = async (context, answer) => {
  try {
    const clinics = await clinicsModel.find({});
    answer(null, { result: clinics })
  } catch (exception) {
    answer(exception, null);
  }
}

export { getAllClinicsCommand }