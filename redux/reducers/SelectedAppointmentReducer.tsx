import * as ActionTypes from '../ActionTypes';

export default (selectedAppointment = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SELECT_APPOINTMENT:
      return action.payload;
  }
  return selectedAppointment;
};
