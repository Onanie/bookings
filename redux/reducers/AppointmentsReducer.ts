import * as ActionTypes from '../ActionTypes';

export const appointments =[
    {
     date:"2022-04-24",
     doctor:"Dr Nkwe",
     speciality:"Cardiology",
     address:"4677 Down Town Emalahleni",
     status:"active"
    },
    {
     date:"2022-05-24",
     doctor:"Dr Van Zyl",
     speciality:"Radiology",
     address:"4000 Pretoria Gauteng",
     status:"active"
    },
    {
     date:"2022-05-04",
     doctor:"Dr Mkhize",
     speciality:"Cardiology",
     address:"2787 Cape Town Westen Cape",
     status:"active"
    },
    {
     date:"2022-06-10",
     doctor:"Dr Nchabeleng",
     speciality:"Dermatology",
     address:"7880 Centurion Gauteng",
     status:"active"
    },
    {
     date:"2022-10-25",
     doctor:"Dr Thobakgale",
     speciality:"Surgery",
     address:"1400 Turfloop Limpopo",
     status:"active"
    },
]

export default (currentUser = appointments, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return action.payload;
  }
  return currentUser;
};
