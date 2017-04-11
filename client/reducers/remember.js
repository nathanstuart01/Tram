const remember = (state = false, action) => {
 switch(action.type) {
   case 'FORGET':
     return false
   default:
     return state;
 }
}

export default remember;