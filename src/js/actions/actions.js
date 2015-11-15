/*
 * Actions
 * We dispatch actions. For example
 * store.dispatch({ type: 'SEND_MESSAGE', text: 'hi' })
 *
 * These actions are picked up by the reducers
 */

export const SEND_MESSAGE = 'SEND_MESSAGE'

/*
 * An Action Creator. It is just a function
 * that returns an action. An action is an object
 * where the only required property is 'type',
 * the rest is all up to us.
 */
export function sendMessage(text) {
  return { type: SEND_MESSAGE, message : text }
}

