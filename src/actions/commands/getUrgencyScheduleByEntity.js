import mongoose from 'mongoose';
import seneca from 'seneca';

import { clinicsModel } from '../../domain'

const getUrgencyScheduleByEntityCommand = async (context, answer) => {
  try {
    const clinics = await clinicsModel.findOne({'entity': context.entity }, 'emergencySchedule');
    answer(null, { result : clinics})
  } catch (exception) {
    answer(exception, null);
  }
}

export { getUrgencyScheduleByEntityCommand }