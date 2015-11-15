/*
 * A simple dumb form component.
 * Nothing special here but handles click event,
 * but calling a function passed from App -> Chatlog -> Form
 * Dumb components change data by calling functions
 * passed down via props.
 */

import React from 'react'


export default class Form extends React.Component {

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()

    // onButtonClick is a fn passed from App -> Chatlog -> here
    this.props.onButtonClick(text)

  }

  render() {
    var view = <div>
      <input placeholder='type message here' ref='input' />
      <button onClick={(e) => this.handleClick(e)}>Send</button>
    </div>
    return view
  }

}

