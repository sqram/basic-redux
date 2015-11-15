/*
 * This is the app container component.
 * It is a smart component.
 */

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/actions'
import Chatlog from '../components/chatlog'
import Form from '../components/form'
import Sidebar from '../components/sidebar'



 // selector
 // returns the props you need for the component.
function select(state) {
  return {
    messages: state.messages
  }
}


export default class App extends React.Component {

  render() {
    // these props are injected via connect()
    const { dispatch, messages } = this.props
    // <Chatlog messages={messages} onButtonClick={text => dispatch(sendMessage(text))} />
    return (
      <div>
        <Sidebar messageCount={messages.length} />
        <Chatlog messages={messages} onButtonClick={text => dispatch(sendMessage(text))} />
      </div>
    )
  }
}




function decorate(target, name, descriptor) {
  console.log(arguments)
  return descriptor
}







export default  connect(select)(App)