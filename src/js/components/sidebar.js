import React from 'react'


var Sidebar = React.createClass({
  render: function () {
    return <sidebar>This chat has <b>{this.props.messageCount}</b> messages</sidebar>
  }

});

export default Sidebar