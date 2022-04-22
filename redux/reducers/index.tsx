import {combineReducers} from 'redux';
import AppointmentsReducer from './AppointmentsReducer';
import CurrentUserReducer from './CurrentUserReducer';
import SelectedAppointment from './SelectedAppointmentReducer';

export default combineReducers({
  selectedAppointment: SelectedAppointment,
  currentUser: CurrentUserReducer,
  appointments:AppointmentsReducer
});
