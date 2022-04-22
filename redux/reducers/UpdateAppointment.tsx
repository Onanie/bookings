import * as ActionTypes from '../ActionTypes';
import {appointments} from "./AppointmentsReducer"

export default (updateAppointment = null, action: any) => {
  switch (action.type) {
    case ActionTypes.UPDATE_APPOINTMENT:
   return { 
    appointments: appointments.map(
           (appointment, i) => i === 1 ? {...appointment, status: action.payload}
                                   : appointment
       )
    }
 }
}
