import * as actionTypes from './ActionTypes';


export const selectAppointment = (appointment: any) => {
  return {
    type: actionTypes.SELECT_APPOINTMENT,
    payload: appointment,
  };
};
export const setCurrentUser = (currentUser: any) => {
  return {
    type: actionTypes.SET_USER,
    payload: currentUser,
  };
};
export const updateAppointment = (appointment: any) => {
  return {
    type: actionTypes.UPDATE_APPOINTMENT,
    payload: appointment,
  };
};


