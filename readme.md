![alt screenshot](http://i.imgur.com/1i4bKcZ.jpg =200x)


### `This Git`
**As i learn i jot down some notes here for a quick reference in future.**  
**Probably some wrong info here.**  

This Git shows a simple example of a redux app 

### Flow
1.  Create your normal React components as you normally would
2.  Create a smart component (ie, container), in our case, &lt;App /gt;
3.  Create your reducer and actions
4.  Create a store with store = createStore(reducer)
5.  Wrap your smart component(s) in &lt;Provider store={store} /&gt;
     * ie, &lt;Provider store={store}&gt;&lt;App /&gt;&lt;/Provider&gt;
 6. Smart components render dumb components, passing props to them.  
 Dumb components are not aware of state, only the props passed to them
7. These props can be any data, or functions you want to trigger an action with.  
 For example, you have this structure  
| - App clickButton={fn}(smart component)  
| ---- Chatlog clickButton={fn}(dumb component)  
| -------- Form onClick={this.props.clickButton()}(dumb component)  
In our case, the function being passed down to from App to Form is translated to this:  
`function (text) { return dispatch(sendMessage(text))}`, which is, in turn,  
`function (text) { return dispatch({type:SEND_MESSAGE, message: text})}`  
and the reducer will react.
8. connect(selector)(App) where selector is a selector function and App is the smart component

 **A good table to keep in mind:**
```
 +----------------------------------------------------------------------------+
 |                  |     Smart components      |      Dumb components        |
 +------------------+---------------------------+-----------------------------+
 |       Location   | Top Level, route handlers | Middle & leaf components    |
 +------------------+---------------------------+-----------------------------+
 | Aware of redux   | Yes                       | No                          |
 +------------------+---------------------------+-----------------------------+
 |   To read data   | Subscribe to redux state  | Read data from props        |
 +------------------+---------------------------+-----------------------------+
 | To change data   | Dispatch refux actions    | Invoke callbacks from props |
 +------------------+---------------------------+-----------------------------+
 ```
