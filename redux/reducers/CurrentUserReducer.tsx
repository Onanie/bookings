import * as ActionTypes from '../ActionTypes';

const user ={
  name:"Onanie Mnisi",
  phone:"0729522676",
  email:"opmnisi@gmail.com",
  address:"123 Sandton Gauteng",
  member_since:"2020-05-10",
  image:require('../../assets/user.png')

}
export default (currentUser = user, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return action.payload;
  }
  return currentUser;
};
