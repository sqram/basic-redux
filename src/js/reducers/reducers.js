/*
 * Reducers. Store data here.
 * Reducers are function that update the state.
 * Remember that they MUST NOT alter the state
 * directly. Instead, you return a new object
 * representing the new state (via Object.assign)
 */


import { SEND_MESSAGE } from '../actions/actions'

const initialState = {
  messages: []
}


/*
 * A reducer function
 */
function chatApp (state = initialState, action) {
  switch (action.type) {

    case SEND_MESSAGE:
      var newState = Object.assign({}, state, {
        messages: state.messages.concat([{author: 'sqram', message: action.message }])
      })
       return newState

    default:
      return state
  }
}



export default chatApp