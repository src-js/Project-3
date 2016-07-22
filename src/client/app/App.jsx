'use strict'
//importing libs
import React    from 'react'
import ReactDOM from 'react-dom'
import Nav      from './Nav.jsx'
import Footer   from './Footer.jsx'
import GMaps    from './GMaps.jsx'

//react component serving as our App!
export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      maps: {}
    }
  }

  render(){
    return(
      <div className="main">
        <header>
          <Nav />
        </header>
        <div className="container"><br/>
          <GMaps />
        </div><br/>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))
