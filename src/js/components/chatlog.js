import React from 'react'
import Form from '../components/form'

/*
 * Component to hold chat log window.
 * Props are passed down
 */
export default class Chatlog extends React.Component {

  render() {
    console.log('chatlog props: ', this.props)
    const {onButtonClick, messages} = this.props
    var log = messages.map((obj, i) => {
      return <div key={i}>
        <span>{obj.author}: </span>
        <span>{obj.message}</span>
      </div>
    })
    return <main>
      <section>
        {log}
      </section>
      <Form onButtonClick={onButtonClick} />
    </main>
  }

}

