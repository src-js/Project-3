import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export class App extends React.Component {
  constructor(){
    super()

    this.state = {
      shoots: {}
    }
  }

  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <h1>Test Hello World!</h1>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))

